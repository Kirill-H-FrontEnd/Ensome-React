// Styles
import s from "./Header.module.scss";
// Button
import Button from "@mui/material/Button";
// Router
import { NavLink, Link, useLocation } from "react-router-dom";
// Images
import Logo from "Images/Header/LogoBlue.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header: React.FC = () => {
  const [isFixed, setFixed] = useState(false);
  // Hide header on loginPage
  const location = useLocation();
  // Fixed header(scroll)
  window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  });
  // Arrays links
  const navLinks = [
    { value: "Home", href: "/" },
    { value: "Solutions", href: "Solutions" },
    { value: "Blog", href: "Blog" },
    { value: "Contacts", href: "Contacts" },
  ];
  const dropLinksItems = [
    { value: "OurTeam", href: "/OurTeam" },
    { value: "Solutions", href: "Solutions" },
    { value: "About us", href: "AboutUs" },
    { value: "Blog", href: "Blog" },
    { value: "FAQ", href: "FAQ" },
    { value: "Contacts", href: "Contacts" },
    { value: "Services", href: "Services" },
    { value: "TodoApp", href: "TodoApp" },
  ];

  return (
    <>
      {location.pathname != "/Autorizahion" && (
        <header className={isFixed ? s.fixed : ""}>
          <div className="box">
            <section className={s.headerInner}>
              <Link className={s.headerLogo} to="/">
                <img src={Logo} alt="" />
              </Link>
              <nav>
                {navLinks.map((link, i) => (
                  <NavLink
                    className={({ isActive }) => (isActive ? s.active : "")}
                    key={i}
                    to={link.href}
                  >
                    {link.value}
                  </NavLink>
                ))}
                <div className={s.headerDropMenu}>
                  <span>
                    Pages
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                  <ul>
                    {dropLinksItems.map((item, i) => (
                      <li key={i}>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? s.active : ""
                          }
                          to={item.href}
                        >
                          {item.value}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={s.headerDropMenu}>
                  <span>
                    Elements
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                  <ul>
                    {dropLinksItems.map((item, i) => (
                      <li key={i}>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? s.active : ""
                          }
                          to={item.href}
                        >
                          {item.value}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              <div className={s.btnGetStarted}>
                <Link to={"Autorizahion"}>Log in</Link>
                <Button className={s.btn} variant="contained">
                  Get started
                </Button>
              </div>
            </section>
          </div>
        </header>
      )}
    </>
  );
};
