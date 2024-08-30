import { Header, Header_InnerBox } from "./component_Style/header/headerStyle";
import { Main } from "./component_Style/main/mainStyle";
import { Footer, Footer_InnerBox } from "./component_Style/footer/footerStyle";
import { Routes, Route } from "react-router-dom";
import Test01 from "./Page/main";
import Hub from "./Page/Hub";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <Header>
        <Header_InnerBox>Header</Header_InnerBox>
      </Header>
      <Main>
        <Routes>
          <Route path="/Hub" element={<Hub />} />
          <Route path="/" element={<Test01 />} />
        </Routes>
      </Main>
      <Footer>
        <Footer_InnerBox>Footer</Footer_InnerBox>
      </Footer>
    </div>
  );
}

export default App;
