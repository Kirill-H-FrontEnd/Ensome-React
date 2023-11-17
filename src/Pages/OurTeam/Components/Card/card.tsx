// Styles
import s from "../Team/OurTeam.module.scss";
// Router
import { Link } from "react-router-dom";
// Model
import { ICardTeam } from "Models/teamCard";
// React Query
import { useQuery } from "react-query";
// Axios
import axios from "axios";
// Components
import { Loader } from "Components/Loader/Loader";
import { Error } from "Components/Error/Error";

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
      {isError && <Error value="Data error! Team cards not loaded..." />}
      {isSuccess &&
        resp.data.map((card: ICardTeam) => (
          <Link
            key={card.id}
            to={`/OurTeam/${card.name.firstname}/${card.id}`}
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
