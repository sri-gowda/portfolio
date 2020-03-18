import Link from "next/link";
import { NavStyles } from "./styles";

const Nav = () => {
  return (
    <NavStyles data-test="nav">
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/experience">
        <a>Experience</a>
      </Link>
      <Link href="/work">
        <a>Work</a>
      </Link>
      <Link href="/blogs">
        <a>Blog</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/recommendation">
        <a>Recommendation</a>
      </Link>
    </NavStyles>
  );
};

export default Nav;
