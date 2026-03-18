import s from "./OurTeam.module.scss";
import { Card } from "../Card/card";
import Header from "Images/OurTeamPage/headerImg.jpg";

function Team() {
  return (
    <section className={s.teamOurTeamPage}>
      <div className="box">
        <section className={s.teamInner}>
          <section className={s.teamHeader}>
            <img src={Header} alt="Our team" />
            <div className={s.teamHeaderOverlay}>
              <div className={s.teamHeaderInfo}>
                <h2>Meet the people behind Ensome</h2>
                <p>
                  We are a diverse team of designers, engineers and strategists
                  united by a passion for great products and honest work.
                </p>
              </div>
            </div>
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
