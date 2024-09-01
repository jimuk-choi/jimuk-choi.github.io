import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Helvetica Neue";
        src: url("../fonts/HelveticaNeue-Regular.woff2") format("woff2"),
          url("../fonts/HelveticaNeue-Regular.woff") format("woff");
        font-weight: normal;
        font-style: normal;
      }
      html {
        font-size: 62.5%;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: "Helvetica Neue", sans-serif;
      }
      button {
        border: none;
        background-color: transparent;
        font-family: "Helvetica Neue", sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
