import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  minify: false,
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: false,
  format: ["esm", "cjs"],
  clean: false,
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
    "@ruhangs/core"
  ],
  dts: true,
}));