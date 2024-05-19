import { Header, Header_InnerBox } from "./header/headerStyle";
import { Main } from "./main/footerStyle";
import { Footer, Footer_InnerBox } from "./footer/footerStyle";
import { Routes, Route } from "react-router-dom";
import Test01 from "./Page/test01";
import Hub from "./Page/Hub";

function App() {
  return (
    <div className="App">
      <Header>
        <Header_InnerBox>Header</Header_InnerBox>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Hub />} />
          <Route path="/test01" element={<Test01 />} />
        </Routes>
      </Main>
      <Footer>
        <Footer_InnerBox>Footer</Footer_InnerBox>
      </Footer>
    </div>
  );
}

export default App;
