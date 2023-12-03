import { Button, ButtonProps } from "antd";
import { ReactMaterialViewType } from "@ruhangs/core";

export const ButtonView: ReactMaterialViewType<ButtonProps> = (
  { children, ...props },
  ref: any
) => {
  return (
    <Button ref={ref} {...props}>
      {children}
    </Button>
  );
};
