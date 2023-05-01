// Styles
import s from "./TeamCard.module.scss";
// Axios
import axios from "axios";
// Hooks
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
// Components
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { FormSub } from "Components/FormSub/FormSub";
import { TeamForm } from "./Components/Form/teamForm";
import { Loader } from "Components/Loader/Loader";
// FontAwrsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const TeamCard: React.FC = () => {
  const { name, id } = useParams();

  const {
    data: resp,
    isError,
    isLoading,
    isSuccess,
  } = useQuery("teamCard", () => fetchCardsTeam());
  const DATA_URL = "http://localhost:3001";
  axios.defaults.baseURL = DATA_URL;
  const fetchCardsTeam = async () => {
    return axios.get(`/team/${id}`);
  };
  // Arrays
  const socialItem = [
    { icon: faFacebookF, href: "https://ru-ru.facebook.com/" },
    { icon: faTwitter, href: "https://twitter.com/" },
    { icon: faInstagram, href: "https://www.instagram.com/" },
  ];
  console.log(document.querySelectorAll(" p * div "));
  return (
    <>
      <HeaderPage title={name} supTitle={""} />
      {isError && (
        <p
          style={{ textAlign: "center", padding: "20px 0px", color: "darkred" }}
        >
          Error!
        </p>
      )}
      {isLoading && (
        <div style={{ textAlign: "center", padding: "20px 0px" }}>
          <Loader />
        </div>
      )}
      {isSuccess && (
        <section className={s.card}>
          <div className="box">
            <section className={s.cardInner}>
              <figure>
                <img src={resp?.data.imgBig} alt="" />
              </figure>
              <section className={s.cardInfo}>
                <div className={s.cardInfoItem}>
                  <h5>Name</h5>
                  <p>
                    <span>{resp?.data.name.firstname}</span>
                    <span> {resp?.data.name.lastname}</span>
                  </p>
                </div>
                <div className={s.cardInfoItem}>
                  <h5>Email</h5>
                  <p>{resp?.data.email}</p>
                </div>
                <div className={s.cardInfoItem}>
                  <h5>Description</h5>
                  <p>{resp?.data.description}</p>
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
      )}
      <TeamForm name={name} />
      <FormSub />
    </>
  );
};
