import s from "./TeamCard.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { FormSub } from "Components/FormSub/FormSub";
import { TeamForm } from "./Components/Form/teamForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { TEAM_CARDS } from "Data/staticData";

export const TeamCard: React.FC = () => {
  const { name, id } = useParams();
  const navigate = useNavigate();

  const card = TEAM_CARDS.find((c) => c.id === Number(id));

  const socialItems = [
    { icon: faFacebookF, href: "https://facebook.com/", label: "Facebook" },
    { icon: faTwitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: faInstagram, href: "https://instagram.com/", label: "Instagram" },
  ];

  return (
    <>
      <HeaderPage
        title={
          card ? `${card.name.firstname} ${card.name.lastname}` : (name ?? "")
        }
        supTitle="Our Team"
      />

      {card ? (
        <section className={s.card}>
          <div className="box">
            <div className={s.cardInner}>
              {/* ── Left: photo + social ── */}
              <div className={s.cardPhoto}>
                <div className={s.cardPhotoImg}>
                  <img src={card.imgBig} alt={card.name.firstname} />
                </div>
                <nav className={s.cardSocial}>
                  {socialItems.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </a>
                  ))}
                </nav>
              </div>

              {/* ── Right: profile info ── */}
              <div className={s.cardProfile}>
                <div className={s.cardProfileHeader}>
                  <h1 className={s.cardProfileName}>
                    {card.name.firstname} {card.name.lastname}
                  </h1>
                  <span className={s.cardProfileJob}>{card.job}</span>
                </div>

                <div className={s.cardInfoRows}>
                  <div className={s.cardInfoRow}>
                    <span className={s.cardInfoLabel}>Email</span>
                    <span className={s.cardInfoValue}>{card.email}</span>
                  </div>
                  <div className={s.cardInfoRow}>
                    <span className={s.cardInfoLabel}>Phone</span>
                    <span className={s.cardInfoValue}>+{card.phone}</span>
                  </div>
                  <div className={s.cardInfoRow}>
                    <span className={s.cardInfoLabel}>Position</span>
                    <span className={s.cardInfoValue}>{card.job}</span>
                  </div>
                </div>

                <div className={s.cardDescription}>
                  <h5>About</h5>
                  <p>{card.description}</p>
                </div>

                <button className={s.cardBackBtn} onClick={() => navigate(-1)}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back to team
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p style={{ textAlign: "center", padding: "60px 0", color: "#9497a1" }}>
          Team member not found.
        </p>
      )}

      <TeamForm name={name} />
      <FormSub />
    </>
  );
};
