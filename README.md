# rolldown-repro

Reproduction repository for a bug pertaining to `rolldown-plugin-dts`.

**Steps to reproduce**
- Install dependencies with `bun install`.
- Build using `bun run build`.

Compare the `dist/index-chunk.d.ts` and `expected-chunk.d.ts` files to see the difference between the current behavior and what's expected.