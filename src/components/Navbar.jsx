import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#f1f1f1" }}>
      <Link to="/">Home</Link>
      <Link to="/users">Register</Link>
      <Link to='/about' >About</Link>
      <Link to='/clock'>Clock</Link>
      <Link to='/Companies'>Companies Data</Link>
    </nav>
  );
}

export default Navbar;
