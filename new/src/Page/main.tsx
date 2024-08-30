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
        <MainSectionTitle>Heading01 Test</MainSectionTitle>
      </MainSectionTitleWrapper>

      {/* <h1>test01 Page</h1> */}
      {/* <Link to="/">
        <Button>Hub</Button>
      </Link> */}
    </>
  );
}
export default Main;
