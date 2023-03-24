// Styles
import s from "./_Stat.module.scss";

export const Stat: React.FC = () => {
  const items = [
    {
      value: "1830+",
      name: "Project executed",
      key: "1",
    },
    {
      value: "220",
      name: "Data analytics",
      key: "2",
    },
    {
      value: "390",
      name: "Data management",
      key: "3",
    },
    {
      value: "834+",
      name: "Satisfied customers",
      key: "4",
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
              {items.map((item) => (
                <div key={item.key} className={s.statItem}>
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
