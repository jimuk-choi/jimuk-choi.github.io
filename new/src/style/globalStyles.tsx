import { Global, css } from "@emotion/react";

interface GlobalStylesProps {
  isDarkMode: boolean;
}

const GlobalStyles = ({ isDarkMode }: GlobalStylesProps) => (
  <Global
    styles={css`
      @font-face {
        font-family: "Helvetica Neue";
        src: url("../public/font/HelveticaNeue-Regular.woff") format("woff");
        font-weight: normal;
        font-style: normal;
      }
      html {
        font-size: 62.5%;
      }
      body,
      div,
      img,
      rect {
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue", sans-serif;
        cursor: none;
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
        font-family: "Helvetica Neue", sans-serif;
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
