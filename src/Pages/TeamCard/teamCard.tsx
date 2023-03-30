// Styles
import s from "./TeamCard.module.scss";
// Axios
import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Components
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { FormSub } from "Components/FormSub/FormSub";
// Models
import { ICardTeam } from "Models/teamCard";
// FontAwrsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { TeamForm } from "./Components/Form/teamForm";

export const TeamCard: React.FC = () => {
  const { id } = useParams();
  const [card, setCard] = useState<ICardTeam>();
  // Data
  async function fetchCardsTeam() {
    try {
      const { data } = await axios.get<ICardTeam>(
        `http://localhost:3001/team/${id}`
      );
      setCard(data);
    } catch (error) {
      alert("error");
    }
  }
  useEffect(() => {
    fetchCardsTeam();
  }, []);
  // Arrays
  const socialItem = [
    { icon: faFacebookF, href: "https://ru-ru.facebook.com/" },
    { icon: faTwitter, href: "https://twitter.com/" },
    { icon: faInstagram, href: "https://www.instagram.com/" },
  ];

  return (
    <>
      <HeaderPage title={card?.name.firstname} supTitle={""} />
      <section className={s.card}>
        <div className="box">
          <section className={s.cardInner}>
            <figure>
              <img src={card?.imgBig} alt="" />
            </figure>
            <section className={s.cardInfo}>
              <div className={s.cardInfoItem}>
                <h5>Name</h5>
                <p>
                  <span>{card?.name.firstname}</span>
                  <span> {card?.name.lastname}</span>
                </p>
              </div>
              <div className={s.cardInfoItem}>
                <h5>Email</h5>
                <p>{card?.email}</p>
              </div>
              <div className={s.cardInfoItem}>
                <h5>Description</h5>
                <p>{card?.description}</p>
              </div>
              <div className={s.cardInfoSocial}>
                {socialItem.map((item, i) => (
                  <a target={"_blank"} key={i} href={item.href}>
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                ))}
              </div>
            </section>
          </section>
        </div>
      </section>
      <TeamForm name={card?.name.firstname} />
      <FormSub />
    </>
  );
};
