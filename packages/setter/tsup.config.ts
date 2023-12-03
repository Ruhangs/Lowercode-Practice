import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  minify: !options.watch,
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ["esm", "cjs"],
  external: [
    "react",
    "react-dom",
    "@craftjs/core",
    "antd",
    "@ant-design/pro-components",
    "lodash-es",
    "@devtools-ds/object-inspector",
    "@uiw/react-textarea-code-editor",
    "@devtools-ds/console",
    "@ant-design/icons",
    "ahooks",
  ],
  dts: true,
}))