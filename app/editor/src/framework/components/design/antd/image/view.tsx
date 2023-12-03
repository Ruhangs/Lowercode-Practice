import { Image, ImageProps } from "antd";
import { ReactMaterialViewType } from "@ruhangs/core";

export const View: ReactMaterialViewType<
ImageProps
> = ({ ...props }, ref: any) => {
  return (
    <div style={{ display: 'inline-block', width: 'auto' }} ref={ref} >
      <Image {...props} />
    </div>
  );
};

export default View;
