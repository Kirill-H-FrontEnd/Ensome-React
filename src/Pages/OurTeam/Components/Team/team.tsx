// Styles
import s from "./OurTeam.module.scss";
// Components
import { Card } from "../Card/card";
// Images
import Header from "Images/OurTeamPage/headerImg.jpg";

function Team() {
  return (
    <section className={s.teamOurTeamPage}>
      <div className="box">
        <section className={s.teamInner}>
          <section className={s.teamHeader}>
            <img src={Header} alt="" />
            <section className={s.teamHeaderInfo}>
              <p>
                Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
                imperdiet in mauris et, euismod vestibulum lacus. Integer enim
                elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis
                lobortis eros. Fusce id commodo libero.
              </p>
              <p>
                Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
                imperdiet in mauris et, euismod vestibulum lacus. Integer enim
                elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis
                lobortis eros. Fusce id commodo libero.
              </p>
            </section>
          </section>
          <div className={s.teamCards}>
            <Card />
          </div>
        </section>
      </div>
    </section>
  );
}

export { Team };
