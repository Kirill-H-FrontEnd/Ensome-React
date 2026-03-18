import s from "./FormContacts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

export const Form: React.FC = () => {
  const formInfoItems = [
    {
      title: "Email",
      value: "ensome@info.co.us",
      icon: faEnvelope,
    },
    {
      title: "Phone",
      value: "+1 601-201-5580",
      icon: faPhone,
    },
    {
      title: "Address",
      value: "1642 Washington Ave, Jackson, MS",
      icon: faLocationDot,
    },
  ];

  return (
    <section className={s.formContactsPage}>
      <div className="box">
        <section className={s.formInner}>
          {/* ── Left info panel ── */}
          <aside className={s.infoPanel}>
            <div className={s.infoPanelTop}>
              <p className={s.infoTag}>Get in touch</p>
              <h2>
                How can we <span>help you?</span>
              </h2>
              <p className={s.infoDesc}>
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            <ul className={s.infoList}>
              {formInfoItems.map((item, i) => (
                <li key={i} className={s.infoItem}>
                  <span className={s.infoIcon}>
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <div>
                    <p className={s.infoItemLabel}>{item.title}</p>
                    <p className={s.infoItemValue}>{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className={s.infoPanelDecor} aria-hidden="true" />
          </aside>

          {/* ── Right form ── */}
          <div className={s.formCard}>
            <h3 className={s.formTitle}>Send us a message</h3>

            <form className={s.form}>
              <div className={s.row}>
                <div className={s.field}>
                  <label>Your name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className={s.field}>
                  <label>Email address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className={s.field}>
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" />
              </div>

              <div className={s.field}>
                <label>Message</label>
                <textarea
                  placeholder="Tell us more about your request..."
                  rows={6}
                />
              </div>

              <Button type="submit" className={s.submitBtn}>
                <FontAwesomeIcon icon={faPaperPlane} />
                Send message
              </Button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};
