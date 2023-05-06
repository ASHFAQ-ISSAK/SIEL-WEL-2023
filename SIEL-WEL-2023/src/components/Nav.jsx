import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="navigation">
      <Link to="/filter" id="Search-a">
        Search
      </Link>
      <Link to="/gamelist" id="Games-a">
        Games
      </Link>
      <Link to="/addgame" id="Addgame-a">
        Add game
      </Link>
    </div>
  );
}
export default Nav;
