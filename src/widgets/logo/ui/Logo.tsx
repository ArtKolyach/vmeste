import logoPng from "@/assets/logo.png";
import { Image, type ImageProps } from "antd";

export const Logo = (props: ImageProps) => {
  return (
    <Image
      {...props}
      preview={false}
      style={{
        opacity: "95%",
        background: "inherit",
        ...props.style,
      }}
      src={logoPng}
    />
  );
};
