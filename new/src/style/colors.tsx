import { MyTheme } from "./types";

export const palette = {
  primary100: "#F2887a",
  secondary100: "#ff0000",
  whitefff: "#ffffff",
  white10: "rgba(255,255,255,0.1)",
  whitef8f: "#F8F8F6",
  black30: "#303030",
};

// 테마 객체를 정의합니다.
export const LightTheme: MyTheme = {
  Bg: {
    whitefff: palette.whitefff,
    whitef8f: palette.whitef8f,
    white10: palette.white10,
    Button_Primary: palette.primary100,
    Button_Secondary: palette.whitefff,
  },
  Color: {
    Button_Primary: palette.whitefff,
    Button_Secondary: palette.primary100,
  },
};

export const DarkTheme: MyTheme = {
  Bg: {
    whitefff: palette.whitefff,
    whitef8f: palette.black30,
    white10: palette.white10,
    Button_Primary: palette.primary100,
    Button_Secondary: palette.whitefff,
  },
  Color: {
    Button_Primary: palette.whitefff,
    Button_Secondary: palette.primary100,
  },
};
