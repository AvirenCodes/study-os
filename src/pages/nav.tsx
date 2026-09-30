import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="bg-sky-300/40 w-screen h-max p-3">
      <Link className="btn-glass-border" to={"/"}>Home</Link>
      <Link className="btn-glass-border" to={"/about"}>About</Link>
    </nav>
  );
}
