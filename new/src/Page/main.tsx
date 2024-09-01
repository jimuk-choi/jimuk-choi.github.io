import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "./Hub";
import {
  MainSectionTitle,
  MainSectionTitleWrapper,
} from "../component_Style/heading/h1";

function Main() {
  return (
    <>
      <MainSectionTitleWrapper>
        <MainSectionTitle>Hello</MainSectionTitle>
      </MainSectionTitleWrapper>
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

      {/* <h1>test01 Page</h1> */}
      {/* <Link to="/">
        <Button>Hub</Button>
      </Link> */}
    </>
  );
}
export default Main;
