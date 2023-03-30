// Styles
import s from "./OurTeam.module.scss";
// Toast
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
// Models
import { ICardTeam } from "Models/teamCard";
// Components
import { Card } from "../Card/card";
import { Loader } from "Components/Loader/Loader";
// Images
import Header from "Images/OurTeamPage/headerImg.jpg";
// FontEwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faClose } from "@fortawesome/free-solid-svg-icons";
function Team() {
  // Messages
  const succ = () =>
    toast.success(<span>Team received!</span>, { duration: 3000 });
  const err = () =>
    toast.error(<span>Error! Data not received...</span>, { duration: 3000 });

  const [card, setCard] = useState<ICardTeam[]>([]);
  const [loader, setLoader] = useState(false);
  const [isError, setError] = useState(false);
  // Data
  async function fetchCardsTeam() {
    try {
      setLoader(true);
      const resp = await axios.get<ICardTeam[]>("http://localhost:3001/team");
      setCard(resp.data);
      succ();
      setLoader(false);
    } catch (e: unknown) {
      err();
      setLoader(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchCardsTeam();
  }, []);

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
          <div style={{ textAlign: "center" }}>{loader && <Loader />}</div>
          {isError && (
            <div className={s.errorTeam}>
              <h1>Data error! data not received, try reloading the page</h1>
              <a href="">
                <FontAwesomeIcon icon={faArrowsRotate} />
              </a>
            </div>
          )}
          <div className={s.teamCards}>
            <div className={s.message}>
              <Toaster position="bottom-center" reverseOrder={false} />
            </div>
            {card.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export { Team };
