// Styles
import s from "./FormSub.module.scss";
import Button from "@mui/material/Button";
import { useAnimate } from "Hooks/useAnimate";
export const FormSub: React.FC = () => {
  useAnimate(s.active);
  return (
    <section className={s.subscribeForm}>
      <div className="box">
        <section className={`${s.subscribeInner} animate `}>
          <section>
            <h3>Subscribe to our newsletter</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </section>
          <form action="">
            <input type="text" placeholder="Your email" />
            <Button type="submit" variant="contained">
              Send
            </Button>
          </form>
        </section>
      </div>
    </section>
  );
};
