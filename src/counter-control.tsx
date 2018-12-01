import {FeatureAppDefinition} from '@feature-hub/core';
import {ReactFeatureApp} from '@feature-hub/react';
import * as React from 'react';
import {CounterV1} from './counter';

interface CounterControlProps {
  counter: CounterV1;
}

function CounterControl({counter}: CounterControlProps) {
  return (
    <div>
      <button onClick={() => counter.decrement()}>-</button>
      <button onClick={() => counter.increment()}>+</button>
    </div>
  );
}

export const counterControlDefinition: FeatureAppDefinition<ReactFeatureApp> = {
  id: 'example:counter-control',

  dependencies: {
    'example:counter': '^1.0',
  },

  create(env) {
    const counterV1 = env.featureServices['example:counter'] as CounterV1;

    return {
      render: () => <CounterControl counter={counterV1} />,
    };
  },
};
