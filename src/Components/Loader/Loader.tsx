// Styles
import s from "./_Loader.module.scss";

export const Loader: React.FC = () => {
  return (
    <>
      <div className={s.threeBody}>
        <div className={s.threeBody__dot}></div>
        <div className={s.threeBody__dot}></div>
        <div className={s.threeBody__dot}></div>
      </div>
    </>
  );
};
