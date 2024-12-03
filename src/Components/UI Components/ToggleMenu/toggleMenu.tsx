import { SetStateAction } from "react";
// Styles
import s from "./ToggleMenu.module.scss";
// Router
import { NavLink } from "react-router-dom";
// Images
import LogoWhite from "Images/Header/LogoWhite.svg";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faClose } from "@fortawesome/free-solid-svg-icons";
// Accordion
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { useToggleMenu } from "../../../providers/ToggleMenuContext";
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

export const ToggleMenu: React.FC = ({}) => {
  const { active, setActiveToggle } = useToggleMenu();
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

      value1: "TodoApp",
      value2: "AboutUs",
      value3: "Pricing",
      value4: "Blog",
      href1: "TodoApp",
      href2: "AboutUs",
      href3: "Pricing",
      href4: "Blog",
    },
    {
      title: "Elements",

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
      <section
        onClick={() => {
          setActiveToggle(false);
        }}
        className={`${s.toggleWrapper} ${active ? s.active : ""}`}
      >
        <section onClick={(e) => e.stopPropagation()} className={s.toggleMenu}>
          <div className={s.toggleMenuHeader}>
            <img src={LogoWhite} alt="" />
          </div>
          <section className={s.toggleItems}>
            <Accordion
              transition
              transitionTimeout={200}
              className={s.szhAccordion}
            >
              {toggleLinks.map((link, i) => (
                <AccordionItem
                  key={i}
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
