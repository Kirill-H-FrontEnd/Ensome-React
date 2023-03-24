import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// Components
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { FormSub } from "Components/FormSub/FormSub";
import Button from "@mui/material/Button";
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
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
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
    { icon: faFacebookF, href: "https://ru-ru.facebook.com/", key: "1" },
    { icon: faTwitter, href: "https://twitter.com/", key: "2" },
    { icon: faInstagram, href: "https://www.instagram.com/", key: "3" },
  ];

  return (
    <>
      <HeaderPage title={card?.name.firstname} />
      <section className="card">
        <div className="box">
          <section className="card-inner">
            <figure>
              <img src={card?.imgBig} alt="" />
            </figure>
            <section className="card-info">
              <div className="cardInfo-item">
                <h5>Name</h5>
                <p>
                  <span>{card?.name.firstname}</span>
                  <span> {card?.name.lastname}</span>
                </p>
              </div>
              <div className="cardInfo-item">
                <h5>Email</h5>
                <p>{card?.email}</p>
              </div>
              <div className="cardInfo-item">
                <h5>Description</h5>
                <p>{card?.description}</p>
              </div>
              <div className="cardInfo-social">
                {socialItem.map((item) => (
                  <a target={"_blank"} key={item.key} href={item.href}>
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
