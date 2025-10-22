// This file represents what `dist/index-chunk.d.ts` is expected output after the build is complete
// The difference is the incorrect generic type parameter in the `doSomething` method

//#region other.d.ts
type Something$1 = Something<number>;
declare class SomethingClass<T$1 extends Something$1> {
  value: T$1;
  constructor(value: T$1);
  // `dist/index-chunk.d.ts` outputs:
  // doSomething<T extends Something$1>(value: T$1): T$1;
  // but it should be:
  doSomething<T extends Something$1>(value: T): T;
}
type SomethingElse = boolean;
//#endregion
//#region index.d.ts
type Something<T$1> = {
  value: T$1;
};
type T = SomethingElse;
//#endregion
export { SomethingElse as a, SomethingClass as i, T as n, Something$1 as r, Something as t };
//# sourceMappingURL=index-chunk.d.ts.map