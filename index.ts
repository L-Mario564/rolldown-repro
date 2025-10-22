import type { SomethingElse } from './other';

export type Something<T> = {
  value: T;
};

export type T = SomethingElse;