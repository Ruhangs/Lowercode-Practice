import { defineConfig } from 'tsup'


export default defineConfig((options) => ({
  minify: !options.watch,
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ["esm","cjs"],
  external: ["react", "react-dom", "@craftjs/core", "zustand", "antd", "lodash-es", "react-i18next", ],
  dts: true,
}))
