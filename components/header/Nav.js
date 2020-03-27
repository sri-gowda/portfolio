import Link from "next/link";
import { useRouter } from "next/router";
import { NavStyles } from "./styles";

const navs = [
  {
    name: "About",
    url: "/"
  },
  {
    name: "Experience",
    url: "/experience"
  },
  {
    name: "Work",
    url: "/work"
  },
  {
    name: "Blog",
    url: "/blogs"
  },
  {
    name: "Contact",
    url: "/contact"
  },
  {
    name: "Recommendation",
    url: "/recommendation"
  }
];

const Nav = () => {
  const route = useRouter();

  return (
    <NavStyles data-test="nav">
      {navs.map((nav, index) => {
        return (
          <Link href={nav.url} key={nav.url}>
            <a
              className={route.pathname === nav.url ? "active" : ""}
              onClick={() => setSelectedIndex(index)}
            >
              {nav.name}
            </a>
          </Link>
        );
      })}
    </NavStyles>
  );
};

export default Nav;
