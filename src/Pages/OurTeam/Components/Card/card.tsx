// Styles
import s from "../Team/OurTeam.module.scss";
// Router
import { Link } from "react-router-dom";
// Model
import { ICardTeam } from "Models/teamCard";
import { useQuery } from "react-query";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { Loader } from "Components/Loader/Loader";

function Card() {
  const {
    data: resp,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(["teamCards"], () => fetchDataPosts());

  const DATA_URL = "http://localhost:3001";
  axios.defaults.baseURL = DATA_URL;
  const fetchDataPosts = async () => {
    return axios.get(`/team`);
  };
  return (
    <>
      {isLoading && (
        <div style={{ textAlign: "center" }}>
          {" "}
          <Loader />
        </div>
      )}
      {isError && (
        <div className={s.errorTeam}>
          <h1>Data error! data not received, try reloading the page</h1>
          <a href="">
            <FontAwesomeIcon icon={faArrowsRotate} />
          </a>
        </div>
      )}
      {isSuccess &&
        resp.data.map((card: ICardTeam) => (
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
        ))}
    </>
  );
}

export { Card };
