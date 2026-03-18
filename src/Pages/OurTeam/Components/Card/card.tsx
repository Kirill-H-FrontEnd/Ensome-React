import s from "../Team/OurTeam.module.scss";
import { Link } from "react-router-dom";
import { ICardTeam } from "Models/teamCard";
import { TEAM_CARDS } from "Data/staticData";

function Card() {
  return (
    <>
      {TEAM_CARDS.map((card: ICardTeam) => (
        <Link
          key={card.id}
          to={`/OurTeam/${card.name.firstname}/${card.id}`}
          className={s.teamCard}
        >
          <div className={s.teamCardImg}>
            <img src={card.img} alt={card.name.firstname} />
            <div className={s.teamCardOverlay}>
              <span>View profile</span>
            </div>
          </div>
          <div className={s.teamCardInfo}>
            <p className={s.teamCardName}>
              {card.name.firstname} {card.name.lastname}
            </p>
            <span className={s.teamCardJob}>{card.job}</span>
          </div>
        </Link>
      ))}
    </>
  );
}

export { Card };
