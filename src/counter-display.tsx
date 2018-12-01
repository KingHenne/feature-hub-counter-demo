import {FeatureAppDefinition} from '@feature-hub/core';
import {ReactFeatureApp} from '@feature-hub/react';
import * as React from 'react';
import {CounterV1} from './counter';
import {useCounter} from './use-counter';

interface CounterDisplayProps {
  counter: CounterV1;
}

function CounterDisplay({counter}: CounterDisplayProps) {
  const count = useCounter(counter);

  return <div>{count}</div>;
}

export const counterDisplayDefinition: FeatureAppDefinition<ReactFeatureApp> = {
  id: 'example:counter-display',

  dependencies: {
    'example:counter': '^1.0',
  },

  create(env) {
    const counterV1 = env.featureServices['example:counter'] as CounterV1;

    return {
      render: () => <CounterDisplay counter={counterV1} />,
    };
  },
};
