import type { Something } from '.';

export class SomethingClass<T extends Something<number>> {
  constructor(public value: T) {}

  public doSomething<T extends Something<number>>(value: T): T {
    return value;
  }
}

export type SomethingElse = boolean;