import { Link } from "react-router-dom";

function Hub() {
  return (
    <div>
      <h1>Hub</h1>
      <Link to="/test01">test01로 이동</Link>
      <Link to="/test02">test02로 이동</Link>
    </div>
  );
}
export default Hub;
