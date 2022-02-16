import Link from "next/link";
const Nav = () => {
  return (
    <nav className="nav bg-dark d-flex justify-content-between">
      <Link href="/">
        <a className="nav-link text-light logo">Mybook</a>
      </Link>
      <Link href="/register">
        <a className="nav-link text-light">Register</a>
      </Link>
      <Link href="/login">
        <a className="nav-link text-light">Login</a>
      </Link>
    </nav>
  );
};

export default Nav;
