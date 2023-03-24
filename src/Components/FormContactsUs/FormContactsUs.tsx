// Styles
import s from "./_FormContactsUs.module.scss";
// Router
import { Link } from "react-router-dom";
// Button
import Button from "@mui/material/Button";
// Hooks
import { useAnimate } from "Hooks/useAnimate";
export const FormContactsUs: React.FC = () => {
  // AnimateBlock
  useAnimate(s.active);
  // Arrays
  const adressItems = [
    {
      title: "Email address",
      value: "ensome@info.co.us",
      key: "1",
    },
    {
      title: "Phone number",
      value: "+1601-201-5580",
      key: "2",
    },
    {
      title: "Address",
      value: "1642 Washington Avenue, Jackson, MS, Mississippi, 39201",
      key: "3",
    },
  ];
  return (
    <>
      <section className={s.contactsUsForm}>
        <div className="box">
          <section className={`${s.contactsUsInner} animate`}>
            <section>
              <h4>
                Left questions? Contacts us now for a free consultation and free
                trial!
              </h4>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
              </p>
              <div className={s.contactsUsInfoContent}>
                {adressItems.map((item) => (
                  <div key={item.key}>
                    <span>{item.title}</span>
                    <h5>{item.value}</h5>
                  </div>
                ))}
              </div>
              <Link to="/Contacts">Contact us</Link>
            </section>
            <form>
              <h4>Contact Us</h4>
              <div className={s.formInputs}>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="theme" placeholder="Theme" />
                <input type="text" name="mess" placeholder="Message" />
              </div>
              <div className={s.formButton}>
                <Button type="submit" variant="contained">
                  Send
                </Button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};
