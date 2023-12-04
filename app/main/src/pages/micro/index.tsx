import WujieReact from "wujie-react";
import { useNavigate, useLocation } from "react-router-dom";

export const MicroApp = () => {

  // 告诉子应用要跳转哪个路由
  const props = {
    jump: () => {
      window.location.reload()
    },
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw'
    }} >
      <WujieReact
        width="100%"
        height="100%"
        name="editor"
        url="//localhost:4000/"
        sync={true}
        fetch={fetch}
        props={props}
      />
    </div>
  )
}
