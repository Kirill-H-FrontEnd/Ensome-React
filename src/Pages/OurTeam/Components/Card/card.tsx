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
      className="team-card"
    >
      <div className="teamCard-img">
        <img src={card.img} alt="" />
      </div>
      <div className="teamCard-info">
        <h5>{card.name.firstname}</h5>
        <h5>{card.name.lastname}</h5>
        <div className="teamCard-content">
          <p>{card.job}</p>
        </div>
      </div>
    </Link>
  );
}

export { Card };
