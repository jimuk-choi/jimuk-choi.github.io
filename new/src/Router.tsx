import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test01 from "./Page/main";
import Test02 from "./Page/test02";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>{/* <Route path="/test01" element={<Test01 />} /> */}</Routes>
    </BrowserRouter>
  );
};

export default Router;
