import {
  FeatureAppManager,
  FeatureServiceProviderDefinition,
  FeatureServiceRegistry,
  FeatureServiceConsumerConfigs,
} from '@feature-hub/core';
import {loadAmdModule} from '@feature-hub/module-loader';

export interface FeatureHubProviderProps {
  children: (manager: FeatureAppManager) => JSX.Element;
  configs?: FeatureServiceConsumerConfigs;
  featureServiceDefinitions?: FeatureServiceProviderDefinition[];
}

export function FeatureHubProvider({
  children,
  configs = {},
  featureServiceDefinitions = [],
}: FeatureHubProviderProps): JSX.Element {
  const registry = new FeatureServiceRegistry(configs);

  registry.registerProviders(featureServiceDefinitions, 'demo-integrator');

  const manager = new FeatureAppManager(registry, loadAmdModule);

  return children(manager);
}
