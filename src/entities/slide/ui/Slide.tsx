import type { CSSProperties, PropsWithChildren } from "react";
import { Flex, type FlexProps } from "antd";
import styles from "./Slide.module.css";

type Props = {
  backgroundColor?: CSSProperties["backgroundColor"];
  background?: CSSProperties["background"];
};

export const Slide = ({
  children,
  backgroundColor,
  background,
  style,
  ...flexProps
}: PropsWithChildren<Props> & FlexProps) => {
  return (
    <Flex
      justify="center"
      align="center"
      vertical
      style={{
        height: "100vh",
        backgroundColor: backgroundColor ?? "inherit",
        background,
        textAlign: "center",
        padding: 15,
      }}
      className={`${styles.slide}`}
      gap={20}
      {...flexProps}
    >
      {children}
    </Flex>
  );
};
