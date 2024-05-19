import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const InnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #aaaaaa;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #aaaaaa;
  cursor: pointer;
`;

function Hub() {
  return (
    <div>
      <h1>Hub Page</h1>
      <Link to="https://jimukchoi.github.io/JMC.github.io/">
        <Button>Previous</Button>
      </Link>
      <Link to="/test01">
        <Button>Test01</Button>
      </Link>
    </div>
  );
}
export default Hub;
