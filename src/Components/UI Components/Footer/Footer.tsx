// Styles
import s from "./_Footer.module.scss";
// Router
import { Link, NavLink, useLocation } from "react-router-dom";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
// Images
import Logo from "Images/Header/LogoBlue.svg";
// Accordion
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
const AccordionItem = ({ ...rest }) => (
  <Item
    {...rest}
    className={s.accordion}
    buttonProps={{
      className: ({ isEnter }) =>
        `${s.accordionBtn} ${isEnter && s.accordionBtnExpanded}`,
    }}
    contentProps={{ className: s.accordionContent }}
    panelProps={{ className: s.accordionPanel }}
  />
);
export const Footer: React.FC = () => {
  const location = useLocation();
  // Arrays links
  const linksAbout = [
    { value: "Home", href: "/", key: "1" },
    { value: "About Us", href: "AboutUs", key: "2" },
    { value: "Services", href: "Services", key: "3" },
    { value: "Solutions", href: "Solutions", key: "4" },
  ];
  const linksInformation = [
    { value: "Contacts", href: "Contacts", key: "1" },
    { value: "Our team", href: "OurTeam", key: "2" },
    { value: "Blog", href: "Blog", key: "3" },
    { value: "FAQ", href: "FAQ", key: "4" },
  ];
  const linksService = [
    { value: "Pages", href: "Pages", key: "1" },
    { value: "Elements", href: "Elements", key: "2" },
    { value: "Todo App", href: "TodoAPP", key: "3" },
    { value: "Pricing", href: "Pricing", key: "4" },
  ];
  const socialLinks = [
    { value: faFacebookF, href: "https://ru-ru.facebook.com/", key: "1" },
    { value: faTwitter, href: "https://twitter.com/?lang=ru", key: "2" },
    { value: faInstagram, href: "https://www.instagram.com/", key: "3" },
    { value: faYoutube, href: "https://www.youtube.com/", key: "4" },
    { value: faBehance, href: "https://www.behance.net/", key: "5" },
    { value: faTelegramPlane, href: "https://web.telegram.org/z/", key: "6" },
  ];

  return (
    <>
      {location.pathname != "/Autorizahion" && (
        <footer id="footer" className={s.footer}>
          <div className="box">
            <div className={s.footerInner}>
              <section className={s.footerLinks}>
                <div className={s.footerLogo}>
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
                <section className={s.footerPages}>
                  <div className={s.footerPagesItem}>
                    <h3>
                      About
                      <FontAwesomeIcon icon={faChevronDown} />
                    </h3>
                    <nav>
                      {linksAbout.map((link) => (
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? s.active : ""
                          }
                          key={link.key}
                          to={link.href}
                        >
                          {link.value}
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                  <div className={s.footerPagesItem}>
                    <h3>
                      Information
                      <FontAwesomeIcon icon={faChevronDown} />
                    </h3>
                    <nav>
                      {linksInformation.map((link) => (
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? s.active : ""
                          }
                          key={link.key}
                          to={link.href}
                        >
                          {link.value}
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                  <div className={s.footerPagesItem}>
                    <h3>
                      Service
                      <FontAwesomeIcon icon={faChevronDown} />
                    </h3>
                    <nav>
                      {linksService.map((link) => (
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? s.active : ""
                          }
                          key={link.key}
                          to={link.href}
                        >
                          {link.value}
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                  {/* Accordion(mobile) */}
                  <Accordion
                    transition
                    transitionTimeout={200}
                    className={s.szhAccordion}
                  >
                    <AccordionItem
                      header={
                        <>
                          About
                          <FontAwesomeIcon icon={faChevronDown} />
                        </>
                      }
                    >
                      {({ toggle }: any) => (
                        <>
                          {linksAbout.map((link) => (
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? s.active : ""
                              }
                              onClick={() => toggle(false)}
                              key={link.key}
                              to={link.href}
                            >
                              {link.value}
                            </NavLink>
                          ))}
                        </>
                      )}
                    </AccordionItem>
                    <AccordionItem
                      header={
                        <>
                          Information
                          <FontAwesomeIcon icon={faChevronDown} />
                        </>
                      }
                    >
                      {({ toggle }: any) => (
                        <>
                          {linksInformation.map((link) => (
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? s.active : ""
                              }
                              onClick={() => toggle(false)}
                              key={link.key}
                              to={link.href}
                            >
                              {link.value}
                            </NavLink>
                          ))}
                        </>
                      )}
                    </AccordionItem>
                    <AccordionItem
                      header={
                        <>
                          Service
                          <FontAwesomeIcon icon={faChevronDown} />
                        </>
                      }
                    >
                      {({ toggle }: any) => (
                        <>
                          {linksService.map((link) => (
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? s.active : ""
                              }
                              onClick={() => toggle(false)}
                              key={link.key}
                              to={link.href}
                            >
                              {link.value}
                            </NavLink>
                          ))}
                        </>
                      )}
                    </AccordionItem>
                    <AccordionItem
                      header={
                        <>
                          Contacts info
                          <FontAwesomeIcon icon={faChevronDown} />
                        </>
                      }
                    >
                      <div className={s.footerInfoItem}>
                        <span>+1 601-201-5580</span>
                        <a target={"_blank"} href="https://www.google.com/">
                          ensome@info.co.us
                          <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                      </div>
                      <div className={s.footerInfoItem}>
                        <span>1642 Washington Avenue, Jackson, MS, 39201</span>
                        <a target={"_blank"} href="https://www.google.com/">
                          Driving derections
                          <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </section>
              </section>
              <section className={s.footerContacts}>
                <div className={s.footerInfo}>
                  <h3>
                    Contacts
                    <FontAwesomeIcon icon={faChevronDown} />
                  </h3>
                  <div className={s.footerInfoContent}>
                    <div className={s.footerInfoItem}>
                      <span>+1 601-201-5580</span>
                      <a target={"_blank"} href="https://www.google.com/">
                        ensome@info.co.us
                        <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </div>
                    <div className={s.footerInfoItem}>
                      <span>1642 Washington Avenue, Jackson, MS, 39201</span>
                      <a target={"_blank"} href="https://www.google.com/">
                        Driving derections
                        <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={s.footerSocial}>
                  <h3>Social</h3>
                  <nav>
                    {socialLinks.map((link) => (
                      <a key={link.key} href={link.href} target={"_blank"}>
                        <FontAwesomeIcon icon={link.value} />
                      </a>
                    ))}
                  </nav>
                </div>
              </section>
              <section className={s.footerCopyright}>
                <div className={s.footerCopyrightLinks}>
                  <a href="">
                    Privacy policy
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  <a href="">
                    Terms of us
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
                <pre>© 2022 Ensome. All Rights Reserved.</pre>
              </section>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
