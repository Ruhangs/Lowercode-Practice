import React from 'react'
import {
  theme,
  Button,
  message,
  Tooltip,
  Popconfirm,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";


export default function DeleteTool() {
  return (
    <Popconfirm
      title="重置页面"
      description={<div style={{ width: 250 }} >确定要重置吗？您所有的修改都将消失！</div>}
      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      onConfirm={() => window.location.reload()}
      okButtonProps={{
        danger: true,
        type: "dashed"
      }}
    >
      <Button>
        重置页面
      </Button>
    </Popconfirm>
  )
}
