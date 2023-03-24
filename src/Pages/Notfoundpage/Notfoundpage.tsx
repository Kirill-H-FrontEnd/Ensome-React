// Styles
import s from "./_NotFoundPage.module.scss";
// Router
import { Link } from "react-router-dom";

export const Notfoundpage: React.FC = () => {
  document.title = "Not found";
  return (
    <section className={s.NotFoundPage}>
      <div className={s.NotFoundPageContent}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to="/">Go home</Link>
      </div>
    </section>
  );
};
