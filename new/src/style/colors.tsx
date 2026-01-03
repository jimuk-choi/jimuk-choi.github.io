import { Theme } from "@emotion/react";

export const palette = {
  Light_primary100: "#f77463",
  Light_primary_Main: "#F2887a",
  Light_primary80: "#f89486",
  Light_primary40: "#f8efee",
  Dark_primary100: "#c26a5f",
  Dark_primary40: "#7b5753",
  secondary100: "#ff0000",
  white: "#ffffff",
  white90: "#FAF9FA",
  white80: "#fefefe",
  whiteT20: "rgba(255,255,255,0.2)",
  black: "#202020",
  black90: "#3f3f3f",
  black50: "#505050",
  black_Main: "#262527",
  gray80: "#808080",
  gray40: "#b2b2b2",
  gray30: "#c0c0c0",
  gray20: "#f7f7f7",
};

// 테마 객체를 정의합니다.
export const LightTheme: Theme = {
  Bg: {
    white: palette.white,
    white90: palette.white90,
    whiteT20: palette.whiteT20,
    Primary40: palette.Light_primary40,
    Button_Primary: palette.Light_primary_Main,
    Button_Primary_Hover: palette.Light_primary80,
    Button_Primary_Active: palette.Light_primary100,
    Button_Secondary: palette.white,
    Card_Primary: palette.white80,
    InnerCard_Primary: palette.gray20,
  },
  Color: {
    white: palette.black,
    Button_Primary: palette.white,
    Button_Secondary: palette.black,
    Button_Third: palette.Light_primary_Main,
    Paragraph: palette.gray30,
    Lnb: palette.gray80,
  },
  Border: {
    Button_Secondary: palette.black,
    White: palette.white,
  },
};

export const DarkTheme: Theme = {
  Bg: {
    white: palette.white,
    white90: palette.black_Main,
    whiteT20: palette.whiteT20,
    Primary40: palette.Dark_primary40,
    Button_Primary: palette.Dark_primary100,
    Button_Primary_Hover: palette.Light_primary80,
    Button_Primary_Active: palette.Light_primary100,
    Button_Secondary: palette.gray40,
    Card_Primary: palette.black90,
    InnerCard_Primary: palette.black50,
  },
  Color: {
    white: palette.white,
    Button_Primary: palette.white,
    Button_Secondary: palette.white,
    Button_Third: palette.Light_primary_Main,
    Paragraph: palette.white,
    Lnb: palette.gray30,
  },
  Border: {
    Button_Secondary: palette.white,
    White: palette.white,
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
