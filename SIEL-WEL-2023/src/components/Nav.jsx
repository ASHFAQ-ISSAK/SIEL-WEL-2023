import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/filter">Search</Link>
      <Link to="/gamelist">Games</Link>
    </div>
  );
}
export default Nav;
