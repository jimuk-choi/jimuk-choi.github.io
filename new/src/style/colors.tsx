import { MyTheme } from "./types";

export const palette = {
  primary100: "#F2887a",
  secondary100: "#ff0000",
  whitefff: "#ffffff",
  whitef8f: "#F8F8F6",
};

// 테마 객체를 정의합니다.
export const theme: MyTheme = {
  Bg: {
    whitefff: palette.whitefff,
    whitef8f: palette.whitef8f,
    Button_Primary: palette.primary100,
    Button_Secondary: palette.whitefff,
  },
  Color: {
    Button_Primary: palette.whitefff,
    Button_Secondary: palette.primary100,
  },
};
