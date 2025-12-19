import type { CSSProperties, PropsWithChildren } from "react";
import { Flex, type FlexProps } from "antd";
import styles from "./Slide.module.css";

type Props = {
  backgroundColor?: CSSProperties["backgroundColor"];
};

export const Slide = ({
  children,
  backgroundColor,
  style,
  ...flexProps
}: PropsWithChildren<Props> & FlexProps) => {
  return (
    <Flex
      justify="center"
      align="center"
      vertical
      style={{ height: "100vh", backgroundColor: backgroundColor ?? "pink" }}
      className={`${styles.slide}`}
      gap={20}
      {...flexProps}
    >
      {children}
    </Flex>
  );
};
