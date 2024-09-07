import { Theme } from "@emotion/react";

export const palette = {
  Light_primary100: "#f77463",
  Light_primary_Main: "#F2887a",
  Light_primary80: "#f89486",
  Dark_primary100: "#c26a5f",
  secondary100: "#ff0000",
  white: "#ffffff",
  whiteT20: "rgba(255,255,255,0.2)",
  white90: "#FAF9FA",
  black: "#222222",
  black_Main: "#373538",
  gray30: "#b2b2b2",
};

// 테마 객체를 정의합니다.
export const LightTheme: Theme = {
  Bg: {
    white: palette.white,
    white90: palette.white90,
    whiteT20: palette.whiteT20,
    Button_Primary: palette.Light_primary_Main,
    Button_Primary_Hover: palette.Light_primary80,
    Button_Primary_Active: palette.Light_primary100,
    Button_Secondary: palette.white,
  },
  Color: {
    Button_Primary: palette.white,
    Button_Secondary: palette.black,
  },
  Border: {
    Button_Secondary: palette.black,
  },
};

export const DarkTheme: Theme = {
  Bg: {
    white: palette.white,
    white90: palette.black,
    whiteT20: palette.whiteT20,
    Button_Primary: palette.Dark_primary100,
    Button_Primary_Hover: palette.Light_primary80,
    Button_Primary_Active: palette.Light_primary100,
    Button_Secondary: palette.gray30,
  },
  Color: {
    Button_Primary: palette.white,
    Button_Secondary: palette.white,
  },
  Border: {
    Button_Secondary: palette.white,
  },
};

/* // 테마 객체를 정의합니다.
export const LightTheme: MyTheme = {
  Bg: {
    white: palette.white,
    white90: palette.white90,
    whiteT20: palette.whiteT20,
    Button_Primary: palette.Light_primary_Main,
    Button_Secondary: palette.white,
  },
  Color: {
    Button_Primary: palette.white,
    Button_Secondary: palette.Light_primary100,
  },
  Border: {
    Button_Secondary: palette.black,
  },
};

export const DarkTheme: MyTheme = {
  Bg: {
    white: palette.white,
    white90: palette.black,
    whiteT20: palette.whiteT20,
    Button_Primary: palette.Dark_primary100,
    Button_Secondary: palette.white,
  },
  Color: {
    Button_Primary: palette.white,
    Button_Secondary: palette.Light_primary100,
  },
  Border: {
    Button_Secondary: palette.black,
  },
};
 */
