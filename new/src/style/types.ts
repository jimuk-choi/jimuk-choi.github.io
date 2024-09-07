// src/types.ts
import "@emotion/react";
import { Theme } from "@emotion/react";

// 사용자 정의 테마 타입 정의
declare module "@emotion/react" {
  export interface Theme {
    Bg: {
      Button_Primary: string;
      Button_Secondary: string;
      whitefff: string;
      whitef8f: string;
      white10: string;
    };
    Color: {
      Button_Primary: string;
      Button_Secondary: string;
    };
  }
}

// 사용자 정의 테마 타입 정의
export interface MyTheme extends Theme {
  Bg: {
    Button_Primary: string;
    Button_Secondary: string;
    whitefff: string;
    whitef8f: string;
    white10: string;
  };
  Color: {
    Button_Primary: string;
    Button_Secondary: string;
  };
}
