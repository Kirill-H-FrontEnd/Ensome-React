// Styles
import s from "./Stat.module.scss";

export const Stat: React.FC = () => {
  const items = [
    {
      value: "1830+",
      name: "Project executed",
    },
    {
      value: "220",
      name: "Data analytics",
    },
    {
      value: "390",
      name: "Data management",
    },
    {
      value: "834+",
      name: "Satisfied customers",
    },
  ];
  return (
    <>
      <section className={s.statAboutUsPage}>
        <div className="box">
          <section className={s.statInner}>
            <section className={s.statHeader}>
              <h2>Ensome in numbers</h2>
            </section>
            <section className={s.statItems}>
              {items.map((item, i) => (
                <div key={i} className={s.statItem}>
                  <h3>{item.value}</h3>
                  <pre>{item.name}</pre>
                </div>
              ))}
            </section>
          </section>
        </div>
      </section>
    </>
  );
};
