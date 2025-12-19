import { theme } from "antd";
import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#ffaa45",
    colorText: "#ffa736",
    fontFamily: "Rubik Bubbles, system-ui",
    fontWeightStrong: 400,
  },
  components: {
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
  },
  algorithm: theme.darkAlgorithm,
};
