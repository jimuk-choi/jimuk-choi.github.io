import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "./Hub";

function Test01() {
  return (
    <div>
      <h1>test01 Page</h1>
      <Link to="/">
        <Button>Hub</Button>
      </Link>
    </div>
  );
}
export default Test01;
