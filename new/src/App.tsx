import {
  Header,
  Header_InnerBox,
  LogoBox,
  MenuBox,
} from "./component_Style/header/headerStyle";
import { MainSection } from "./component_Style/section/mainSectionStyle";
import { Footer, Footer_InnerBox } from "./component_Style/footer/footerStyle";
import { Routes, Route } from "react-router-dom";
import Test01 from "./Page/main";
import Hub from "./Page/Hub";
import { useState } from "react";
import GlobalStyles from "./style/globalStyles";
import Logo from "./assets/Logo.svg";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/Hub" element={<Hub />} />
        <Route path="/" element={<Test01 />} />
      </Routes>
      <Header>
        <Header_InnerBox>
          <LogoBox>
            <img src={Logo} alt="" style={{ width: "80px", height: "auto" }} />
          </LogoBox>
          <MenuBox>
            <button style={{ fontSize: "1.8rem" }}>menu01</button>
            <button style={{ fontSize: "1.8rem" }}>menu02</button>
            <button style={{ fontSize: "1.8rem" }}>menu03</button>
            <button style={{ fontSize: "1.8rem" }}>menu04</button>
          </MenuBox>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                fontSize: "1.8rem",
                border: "1px solid #000000",
                color: "#000000",
                backgroundColor: "#ffffff",
                padding: "12px 16px",
                borderRadius: "8px",
                fontWeight: "bold",
                letterSpacing: "4%",
              }}
            >
              En
            </button>
            <button
              style={{
                fontSize: "1.8rem",
                color: "white",
                backgroundColor: "#F2887A",
                padding: "12px 48px",
                borderRadius: "8px",
                fontWeight: "bold",
                letterSpacing: "4%",
              }}
            >
              Contact Me Now
            </button>
          </div>
        </Header_InnerBox>
      </Header>
      <MainSection>
        <Footer>
          <Footer_InnerBox>Footer</Footer_InnerBox>
        </Footer>
      </MainSection>
    </div>
  );
}

export default App;
