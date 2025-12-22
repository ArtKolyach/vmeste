import type { CSSProperties } from "react";

export const titleStyle: CSSProperties = {
  fontSize: "5em",
  background:
    "radial-gradient(#812125FF 50%, transparent 90%, transparent 100%)",
  borderRadius: 100,
  padding: 25,
  margin: 0,
};

export const headerStyle: CSSProperties = {
  flex: 1,
  display: "flex",
  alignItems: "end",
};

export const centerStyle: CSSProperties = {
  flex: "none",
};

export const bottomStyle: CSSProperties = {
  flex: 1,
};

export const centerTitleStyle = { ...titleStyle, ...centerStyle };
