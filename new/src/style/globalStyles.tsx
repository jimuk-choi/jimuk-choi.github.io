import { Global, css } from "@emotion/react";

interface GlobalStylesProps {
  isDarkMode: boolean;
}

const GlobalStyles = ({ isDarkMode }: GlobalStylesProps) => (
  <Global
    styles={css`
      @font-face {
        /* Using Pretendard from CDN via link in index.html */
      }
      html {
        font-size: 62.5%;
        background-color: ${isDarkMode ? "#262527" : "#FAF9FA"};
      }
      body,
      div,
      img,
      rect {
        margin: 0;
        padding: 0;
        font-family:
          "Pretendard Variable",
          "Pretendard",
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          Roboto,
          "Noto Sans KR",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "Helvetica Neue",
          Arial,
          sans-serif;
        cursor: none;
        /* background-color: red; */
      }
      p,
      h1,
      h2,
      h3,
      h4 {
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: none;
      }
      button {
        border: none;
        background-color: transparent;
        font-family:
          "Pretendard Variable",
          "Pretendard",
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          Roboto,
          "Noto Sans KR",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "Helvetica Neue",
          Arial,
          sans-serif;
        cursor: none;
      }
      ::selection {
        color: ${isDarkMode ? "#ffffff" : "#000000"};
        background-color: ${isDarkMode ? "#87615c" : "#ffd0c9"};
      }
    `}
  />
);

export default GlobalStyles;
