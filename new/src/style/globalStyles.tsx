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
      }
      body {
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue", sans-serif;
        cursor: none;
      }
      p,
      h1,
      h2,
      h3 {
        margin: 0;
        padding: 0;
      }
      button {
        border: none;
        background-color: transparent;
        font-family: "Helvetica Neue", sans-serif;
        cursor: none;
        /* cursor: pointer; */
      }
    `}
  />
);

export default GlobalStyles;
