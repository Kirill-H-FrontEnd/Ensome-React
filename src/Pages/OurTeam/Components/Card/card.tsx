// Styles
import s from "../Team/OurTeam.module.scss";
// Router
import { Link } from "react-router-dom";
// Model
import { ICardTeam } from "Models/teamCard";
interface TeamCard {
  card: ICardTeam;
}

function Card({ card }: TeamCard) {
  return (
    <Link
      to={`/OurTeam/${card.id}/${card.name.firstname}`}
      className={s.teamCard}
    >
      <div className={s.teamCardImg}>
        <img src={card.img} alt="" />
      </div>
      <div className={s.teamCardInfo}>
        <h5>{card.name.firstname}</h5>
        <h5>{card.name.lastname}</h5>
        <div className={s.teamCardContent}>
          <p>{card.job}</p>
        </div>
      </div>
    </Link>
  );
}

export { Card };
