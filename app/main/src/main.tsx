import ReactDOM from "react-dom/client";
import { ConfigProvider, App } from "antd";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import type { AliasToken } from "antd/es/theme/internal";
import "antd/dist/reset.css";
import WujieReact  from "wujie-react"

const { bus, setupApp, preloadApp } =  WujieReact
bus.$on("click", (msg:any) => window.alert(msg));
setupApp({ name: "editor", url: "//localhost:4000/", exec: true, el: "EditorApp", sync: true })
preloadApp({name:"editor", url: "//localhost:4000/"})

const token: Partial<AliasToken> = {
  borderRadius: 4,
  wireframe: false,
  fontWeightStrong: 400
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ConfigProvider
      theme={{
        token,
      }}
    >
      <App>
        <RouterProvider router={router} />
      </App>
    </ConfigProvider>
);
