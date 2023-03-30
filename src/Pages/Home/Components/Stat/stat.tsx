// Styles
import { useAnimate } from "Hooks/useAnimate";
import s from "./Stat.module.scss";

export const Stat: React.FC = () => {
  useAnimate(s.active);
  const statItem = [
    {
      value: "1830+",
      text: "Project executed",
    },
    {
      value: "220",
      text: "Data analytics",
    },
    {
      value: "390",
      text: "Data management",
    },
    {
      value: "834+",
      text: "Satisfied customers",
    },
  ];
  return (
    <section className={s.statHomePage}>
      <div className="box">
        <section className={s.statInner}>
          {statItem.map((item, i) => (
            <div key={i} className={`${s.statItem} animate`}>
              <h3>{item.value}</h3>
              <pre>{item.text}</pre>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};
