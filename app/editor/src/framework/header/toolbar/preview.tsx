import { Button, message } from "antd"
import { CaretRightOutlined } from "@ant-design/icons";
import { setHistoryRecord } from "@/framework/left/hisotry/db";
import dayjs from "dayjs";
import { useEditor } from "@craftjs/core";

export const Priview = () => {

  const { query } = useEditor();

  const handlePreviewEvt = async () => {
    // 获取当前schema
    try {
      const schema = query.serialize();

      // 保存到本地记录中
      await setHistoryRecord({
        id: new Date().getTime(),
        htmlBody: schema,
        createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        user: "ruhangs",
      });

      // 生成preview逻辑
      const previewId = "" + new Date().getTime();
      sessionStorage.setItem(previewId, schema);
      window.open(`/preview?preId=${previewId}`);
    } catch (error) {
      console.error(error)
      message.error("哎呀，系统发生错误了，请查看控制台")
    }
  };

  return (
    <Button type="dashed" disabled onClick={handlePreviewEvt} >
      <CaretRightOutlined />
      预览
    </Button>
  )
}