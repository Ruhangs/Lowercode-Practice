import { Button, Popconfirm, } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

declare global {
  interface Window {
    $wujie?: any;
  }
}

export default function Reset() {

  return (
    <Popconfirm
      title="重置页面"
      description={<div style={{ width: 250 }} >确定要重置吗？您所有的修改都将消失！</div>}
      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      onConfirm={() => window.$wujie?.props.jump("editor")}
      okButtonProps={{
        danger: true,
      }}
    >
      <Button>
        重置页面
      </Button>
    </Popconfirm>
  )
}
