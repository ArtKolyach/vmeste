import { theme } from "antd";
import type { ThemeConfig } from "antd";

const orange = "#ff9713";
const crimson = "#812125FF";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: orange,
    colorBgContainer: crimson,
    colorBorder: crimson,
    colorText: orange,
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
