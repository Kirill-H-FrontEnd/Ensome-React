// Styles
import { useAnimate } from "Hooks/useAnimate";
import s from "./_Stat.module.scss";

export const Stat: React.FC = () => {
  useAnimate(s.active);
  const statItem = [
    {
      value: "1830+",
      text: "Project executed",
      key: "1",
    },
    {
      value: "220",
      text: "Data analytics",
      key: "2",
    },
    {
      value: "390",
      text: "Data management",
      key: "3",
    },
    {
      value: "834+",
      text: "Satisfied customers",
      key: "4",
    },
  ];
  return (
    <section className={s.statHomePage}>
      <div className="box">
        <section className={s.statInner}>
          {statItem.map((item) => (
            <div key={item.key} className={`${s.statItem} animate`}>
              <h3>{item.value}</h3>
              <pre>{item.text}</pre>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};
