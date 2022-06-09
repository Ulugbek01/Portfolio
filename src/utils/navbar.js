import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";

export const navbar = [
  {
    id: 1,
    path: "/home",
    title: "Home",
    Element: <Home />,
    hiddin: false,
    private: false,
  },
  {
    id: 2,
    path: "/about",
    title: "About",
    Element: <About />,
    hiddin: false,
    private: false,
  },
  {
    id: 3,
    path: "/portfolio",
    title: "Portfolio",
    Element: <Portfolio />,
    hiddin: false,
    private: false,
  },
  {
    id: 4,
    path: "/contact",
    title: "Contact",
    Element: <Contact />,
    hiddin: false,
    private: false,
  },
];
