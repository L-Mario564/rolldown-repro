import type { Something as SomethingCommon } from '.';

export type Something = SomethingCommon<number>;

export class SomethingClass<T extends Something> {
  constructor(public value: T) {}

  public doSomething<T extends Something>(value: T): T {
    return value;
  }
}

export type SomethingElse = boolean;