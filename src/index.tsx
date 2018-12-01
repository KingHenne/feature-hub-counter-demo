import {FeatureAppContainer} from '@feature-hub/react';
import * as React from 'react';
import {render} from 'react-dom';
import {FeatureHubProvider} from './feature-hub-provider';
import {counterDefinition} from './counter';
import {counterControlDefinition} from './counter-control';
import {counterDisplayDefinition} from './counter-display';

const App = () => (
  <FeatureHubProvider featureServiceDefinitions={[counterDefinition]}>
    {manager => (
      <div>
        <FeatureAppContainer
          manager={manager}
          featureAppDefinition={counterControlDefinition}
        />
        <FeatureAppContainer
          manager={manager}
          featureAppDefinition={counterDisplayDefinition}
        />
      </div>
    )}
  </FeatureHubProvider>
);

render(<App />, document.getElementById('root'));
