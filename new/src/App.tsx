import { Header, Header_InnerBox } from "./component_Style/header/headerStyle";
import { MainSection } from "./component_Style/section/mainSectionStyle";
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
      <MainSection>
        <Routes>
          <Route path="/Hub" element={<Hub />} />
          <Route path="/" element={<Test01 />} />
        </Routes>
        <div
          style={{
            width: "100px",
            height: "400px",
          }}
        >
          test
        </div>
        <div
          style={{
            width: "100px",
            height: "400px",
          }}
        >
          test
        </div>
        <Footer>
          <Footer_InnerBox>Footer</Footer_InnerBox>
        </Footer>
      </MainSection>
    </div>
  );
}

export default App;
