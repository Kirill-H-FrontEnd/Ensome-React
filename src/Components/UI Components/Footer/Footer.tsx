import s from "./Footer.module.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "Images/Header/LogoBlue.svg";

export const Footer: React.FC = () => {
  const location = useLocation();

  const linksAbout = [
    { value: "Home", href: "/" },
    { value: "About Us", href: "AboutUs" },
    { value: "Services", href: "Services" },
    { value: "Solutions", href: "Solutions" },
  ];
  const linksInformation = [
    { value: "Contacts", href: "Contacts" },
    { value: "Our Team", href: "OurTeam" },
    { value: "Blog", href: "Blog" },
    { value: "FAQ", href: "FAQ" },
  ];
  const linksService = [
    { value: "Todo App", href: "TodoApp" },
    { value: "Pricing", href: "Pricing" },
    { value: "Elements", href: "Elements" },
    { value: "Authorization", href: "Authorization" },
  ];
  const socialLinks = [
    { icon: faFacebookF, href: "https://facebook.com/", label: "Facebook" },
    { icon: faTwitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: faInstagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: faYoutube, href: "https://youtube.com/", label: "YouTube" },
    { icon: faBehance, href: "https://behance.net/", label: "Behance" },
    { icon: faTelegramPlane, href: "https://telegram.org/", label: "Telegram" },
  ];
  const contactItems = [
    { icon: faPhone, value: "+1 601-201-5580" },
    { icon: faEnvelope, value: "ensome@info.co.us" },
    { icon: faLocationDot, value: "1642 Washington Ave, Jackson, MS" },
  ];

  return (
    <>
      {location.pathname !== "/Authorization" && (
        <footer className={s.footer}>
          <div className="box">
            {/* ── Top row: logo + social ── */}
            <div className={s.footerTop}>
              <Link to="/" className={s.footerLogo}>
                <img src={Logo} alt="Ensome" />
              </Link>
              <p className={s.footerTagline}>
                Find true power in your data with Ensome.
              </p>
              <nav className={s.socialRow}>
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className={s.socialLink}
                  >
                    <FontAwesomeIcon icon={link.icon} />
                  </a>
                ))}
              </nav>
            </div>

            {/* ── Divider ── */}
            <div className={s.divider} />

            {/* ── Nav columns ── */}
            <div className={s.footerGrid}>
              <div className={s.footerCol}>
                <h4 className={s.colTitle}>About</h4>
                <nav className={s.colNav}>
                  {linksAbout.map((link, i) => (
                    <NavLink
                      key={i}
                      to={link.href}
                      className={({ isActive }) =>
                        `${s.colLink} ${isActive ? s.colLinkActive : ""}`
                      }
                    >
                      {link.value}
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div className={s.footerCol}>
                <h4 className={s.colTitle}>Information</h4>
                <nav className={s.colNav}>
                  {linksInformation.map((link, i) => (
                    <NavLink
                      key={i}
                      to={link.href}
                      className={({ isActive }) =>
                        `${s.colLink} ${isActive ? s.colLinkActive : ""}`
                      }
                    >
                      {link.value}
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div className={s.footerCol}>
                <h4 className={s.colTitle}>Services</h4>
                <nav className={s.colNav}>
                  {linksService.map((link, i) => (
                    <NavLink
                      key={i}
                      to={link.href}
                      className={({ isActive }) =>
                        `${s.colLink} ${isActive ? s.colLinkActive : ""}`
                      }
                    >
                      {link.value}
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div className={s.footerCol}>
                <h4 className={s.colTitle}>Contact Us</h4>
                <ul className={s.contactList}>
                  {contactItems.map((item, i) => (
                    <li key={i} className={s.contactItem}>
                      <span className={s.contactIcon}>
                        <FontAwesomeIcon icon={item.icon} />
                      </span>
                      <span className={s.contactValue}>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Divider ── */}
            <div className={s.divider} />

            {/* ── Bottom bar ── */}
            <div className={s.footerBottom}>
              <p className={s.copyright}>© 2024 Ensome. All Rights Reserved.</p>
              <div className={s.bottomLinks}>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
