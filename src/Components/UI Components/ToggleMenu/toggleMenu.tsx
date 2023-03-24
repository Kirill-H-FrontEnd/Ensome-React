import { SetStateAction } from "react";
// Styles
import s from "./_ToggleMenu.module.scss";
// Router
import { NavLink } from "react-router-dom";
// Images
import LogoWhite from "Images/Header/LogoWhite.svg";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faClose } from "@fortawesome/free-solid-svg-icons";
// Accordion
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
const AccordionItem = ({ ...rest }) => (
  <Item
    {...rest}
    className={s.accordion}
    headingProps={{
      className: ({ isEnter }) =>
        `${s.accordionHeader} ${isEnter && s.accordionHeaderExpanded}`,
    }}
    buttonProps={{
      className: ({ isEnter }) =>
        `${s.accordionBtn} ${isEnter && s.accordionBtnExpanded}`,
    }}
    contentProps={{ className: s.accordionContent }}
    panelProps={{ className: s.accordionPanel }}
  />
);

interface IToggleMenuProps {
  active: boolean;
  setActiveToggle: React.Dispatch<SetStateAction<boolean>>;
  setBurgerActive: React.Dispatch<SetStateAction<boolean>>;
}

export const ToggleMenu: React.FC<IToggleMenuProps> = ({
  active,
  setActiveToggle,
  setBurgerActive,
}) => {
  const body = document.querySelector("body");
  if (active) {
    body?.classList.add("hidden");
  } else {
    body?.classList.remove("hidden");
  }

  // Arrays links
  const toggleLinks = [
    {
      title: "Home",
      key: "1",
      value1: "Home",
      value2: "AboutUs",
      value3: "Services",
      value4: "Blog",
      href1: "/",
      href2: "Services",
      href3: "AboutUs",
      href4: "Blog",
    },
    {
      title: "Solutions",
      key: "2",
      value1: "Contacts",
      value2: "Our Team",
      value3: "Pages",
      value4: "Elements",
      href1: "Contacts",
      href2: "OurTeam",
      href3: "Pages",
      href4: "Elements",
    },
    {
      title: "Pages",
      key: "3",
      value1: "Site Map",
      value2: "AboutUs",
      value3: "Pricing",
      value4: "Blog",
      href1: "SiteMap",
      href2: "AboutUs",
      href3: "Pricing",
      href4: "Blog",
    },
    {
      title: "Elements",
      key: "4",
      value1: "Home",
      value2: "AboutUs",
      value3: "Services",
      value4: "Blog",
      href1: "/",
      href2: "Services",
      href3: "AboutUs",
      href4: "Blog",
    },
    {
      title: "Blog",
      key: "5",
      href: "plc",
      value1: "Home",
      value2: "AboutUs",
      value3: "Services",
      value4: "Blog",
      href1: "/",
      href2: "Services",
      href3: "AboutUs",
      href4: "Blog",
    },
    {
      title: "Contacts",
      key: "6",
      href: "plc",
      value1: "FAQ",
      value2: "AboutUs",
      value3: "Services",
      value4: "Blog",
      href1: "FAQ",
      href2: "Services",
      href3: "AboutUs",
      href4: "Blog",
    },
  ];

  return (
    <>
      <section className={`${s.toggleWrapper} ${active ? s.active : ""}`}>
        <section className={s.toggleMenu}>
          <div className={s.toggleMenuHeader}>
            <img src={LogoWhite} alt="" />
            <span
              onClick={() => {
                setActiveToggle(false);
                setBurgerActive(false);
              }}
            >
              <FontAwesomeIcon icon={faClose} />
            </span>
          </div>
          <section className={s.toggleItems}>
            <Accordion
              transition
              transitionTimeout={200}
              className={s.szhAccordion}
            >
              {toggleLinks.map((link) => (
                <AccordionItem
                  key={link.key}
                  header={
                    <>
                      <FontAwesomeIcon icon={faChevronDown} />
                      {link.title}
                    </>
                  }
                >
                  {({ toggle }: any) => (
                    <>
                      <NavLink
                        className={({ isActive }) => (isActive ? s.active : "")}
                        onClick={() => {
                          setActiveToggle(false);
                          setBurgerActive(false);
                          toggle(false);
                        }}
                        to={link.href1}
                      >
                        {link.value1}
                      </NavLink>
                      <NavLink
                        className={({ isActive }) => (isActive ? s.active : "")}
                        onClick={() => {
                          setActiveToggle(false);
                          setBurgerActive(false);
                          toggle(false);
                        }}
                        to={link.href2}
                      >
                        {link.value2}
                      </NavLink>
                      <NavLink
                        className={({ isActive }) => (isActive ? s.active : "")}
                        onClick={() => {
                          setActiveToggle(false);
                          setBurgerActive(false);
                          toggle(false);
                        }}
                        to={link.href3}
                      >
                        {link.value3}
                      </NavLink>
                      <NavLink
                        className={({ isActive }) => (isActive ? s.active : "")}
                        onClick={() => {
                          setActiveToggle(false);
                          setBurgerActive(false);
                          toggle(false);
                        }}
                        to={link.href4}
                      >
                        {link.value4}
                      </NavLink>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          <section className={s.toggleSub}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </section>
        </section>
      </section>
    </>
  );
};
