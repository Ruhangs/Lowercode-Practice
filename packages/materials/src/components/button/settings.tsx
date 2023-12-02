import { ProForm, ProFormText } from "@ant-design/pro-components";
import { SetterRender } from "@ruhangs/setter";

export default () => {
  return (
    <>
      <ProForm.Group title="属性" collapsible align="start">
        <ProFormText label="label" name="label" />
        <ProFormText label="绑定属性" name="name" />
      </ProForm.Group>
    </>
  );
};
