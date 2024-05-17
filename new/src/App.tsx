import React from "react";
import { Header, Header_InnerBox } from "./header/headerStyle";
import { Main } from "./main/mainStyle";
import { Footer, Footer_InnerBox } from "./footer/footerStyle";

function App() {
  return (
    <div className="App">
      <Header>
        <Header_InnerBox>Header</Header_InnerBox>
      </Header>
      <Main>Main</Main>
      <Footer>
        <Footer_InnerBox>Footer</Footer_InnerBox>
      </Footer>
    </div>
  );
}

export default App;
