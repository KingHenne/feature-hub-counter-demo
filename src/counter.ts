import {FeatureServiceProviderDefinition} from '@feature-hub/core';

export type Unlistener = () => void;
export type Listener = () => void;

export class CounterV1 {
  public count: number = 0;
  private listeners = new Set<Listener>();

  decrement() {
    this.update(this.count - 1);
  }

  increment() {
    this.update(this.count + 1);
  }

  subscribe(listener: Listener): Unlistener {
    this.listeners.add(listener);

    return () => this.listeners.delete(listener);
  }

  update(count: number) {
    this.count = count;
    this.listeners.forEach(listener => listener());
  }
}

export const counterDefinition: FeatureServiceProviderDefinition = {
  id: 'example:counter',

  create: () => {
    const counterV1 = new CounterV1();

    return {'1.0': () => ({featureService: counterV1})};
  },
};
