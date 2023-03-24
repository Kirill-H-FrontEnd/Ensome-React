// Styles
import s from "./_FormConatcts.module.scss";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
// Button
import { Button } from "@mui/material";
export const Form: React.FC = () => {
  const formInfoItems = [
    {
      title: "Email",
      value: "ensome@info.co.us",
      icon: faEnvelope,
      key: "1",
    },
    {
      title: "Phone",
      value: "+1 601-201-5580",
      icon: faPhone,
      key: "2",
    },
    {
      title: "Address",
      value: "1642 Washington Ave, Jackson, MS",
      icon: faLocationArrow,
      key: "3",
    },
  ];
  return (
    <>
      <section className={s.formContactsPage}>
        <div className="box">
          <section className={s.formInner}>
            <section className={s.formContent}>
              <section>
                <h2>
                  How can we <span>help you?</span>
                </h2>
                <div className={s.formInfo}>
                  {formInfoItems.map((item) => (
                    <div key={item.key} className={s.formInfoItem}>
                      <h5>
                        <FontAwesomeIcon icon={item.icon} />
                        {item.title}
                      </h5>
                      <pre>{item.value}</pre>
                    </div>
                  ))}
                </div>
              </section>
              <form>
                <div>
                  <input type="email" placeholder="Your email" />
                  <input type="text" placeholder="Name" />
                </div>
                <input type="text" placeholder="Theme" />
                <br />
                <textarea
                  placeholder="Your message"
                  name=""
                  id=""
                  rows={10}
                ></textarea>
                <br />
                <Button type="submit">Send</Button>
              </form>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};
