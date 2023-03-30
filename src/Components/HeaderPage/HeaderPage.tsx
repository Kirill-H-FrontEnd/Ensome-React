// Styles
import styles from "./HeaderPage.module.scss";

interface IHeaderPageProps {
  title: string | undefined;
  supTitle: string | undefined;
}

export const HeaderPage: React.FC<IHeaderPageProps> = ({ title, supTitle }) => {
  return (
    <>
      <section className={styles.headerPage}>
        <div className="box">
          <section>
            <h3>{supTitle}</h3>
            <h2>{title}</h2>
          </section>
        </div>
      </section>
    </>
  );
};
