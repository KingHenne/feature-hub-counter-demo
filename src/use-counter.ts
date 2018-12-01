import * as React from 'react';
import {CounterV1} from './counter';

const {useEffect, useState} = React;

export function useCounter(counter: CounterV1): number {
  const [count, setCount] = useState(counter.count);

  useEffect(() => counter.subscribe(() => setCount(counter.count)), [counter]);

  return count;
}
