// Styles
import s from "./FormHelp.module.scss";
// Button
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export const FormHelp: React.FC = () => {
  return (
    <>
      <section className={s.formHelp}>
        <div className="box">
          <section>
            <h2>Do you need help?</h2>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </p>
            <Link to={"/Contacts"}>
              <Button>Contact Us</Button>
            </Link>
          </section>
        </div>
      </section>
    </>
  );
};
