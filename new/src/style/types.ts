// src/types.ts
import "@emotion/react";
import { Theme } from "@emotion/react";

// 사용자 정의 테마 타입 정의
declare module "@emotion/react" {
  export interface Theme {
    Bg: {
      Button_Primary: string;
      Button_Secondary: string;
      Button_Primary_Hover: string;
      Button_Primary_Active: string;
      white: string;
      white90: string;
      whiteT20: string;
      Primary40: string;
      Card_Primary: string;
      InnerCard_Primary: string;
    };
    Color: {
      white: string;
      Button_Primary: string;
      Button_Secondary: string;
      Button_Third: string;
      Paragraph: string;
      Lnb: string;
    };
    Border: {
      Button_Secondary: string;
      White: string;
    };
  }
}

/* // 사용자 정의 테마 타입 정의
export interface MyTheme extends Theme {
  Bg: {
    Button_Primary: string;
    Button_Secondary: string;
    white: string;
    white90: string;
    whiteT20: string;
  };
  Color: {
    Button_Primary: string;
    Button_Secondary: string;
  };
  Border: {
    Button_Secondary: string;
  };
}
 */
