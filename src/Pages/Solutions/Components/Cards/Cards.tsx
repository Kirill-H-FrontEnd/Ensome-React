// Styles
import s from "./SolutionCards.module.scss";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// Router
import { Link } from "react-router-dom";
// Images
import icon1 from "Images/SolutionsPage/icon1.svg";
import icon2 from "Images/SolutionsPage/icon2.svg";
import icon3 from "Images/SolutionsPage/icon3.svg";
import icon4 from "Images/SolutionsPage/icon4.svg";
import icon5 from "Images/SolutionsPage/icon5.svg";
import icon6 from "Images/SolutionsPage/icon6.svg";
export const Cards: React.FC = () => {
  const cards = [
    {
      icon: icon1,
      title: "Data integration",
      text: "Extract, transform, load (ETL) or extract, load, transform (ELT); data governance (security, availability, quality) implementation.",
    },
    {
      icon: icon2,
      title: "Data integration",
      text: "Data preparation and management;machine learning (ML);  designing and implanting artificial intelligence (AI) solutions.",
    },
    {
      icon: icon3,
      title: "Big data",
      text: "Big data infrastructure setup and support.; big data quality and security management; big data capture, analysis and reporting.",
    },
    {
      icon: icon4,
      title: "Data warehousing",
      text: "The process of constructing and using a data warehouse. Data warehouse and data marts design and implementation.",
    },
    {
      icon: icon5,
      title: "Self-service BI",
      text: "Business intelligence; data analytics infrastructure design and implementation; scheduled analytics querying and reporting.",
    },
    {
      icon: icon6,
      title: "Data visualization",
      text: "Interactive dashboarding; custom and pre-built visuals; multiple visualization techniques (symbol maps, line charts, pie charts...)",
    },
  ];
  return (
    <section className={s.cardsSolutionsPage}>
      <div className="box">
        <section className={s.cardsInner}>
          {cards.map((card, i) => (
            <div key={i} className={s.solutionsCard}>
              <img src={card.icon} alt="" />
              <h5>{card.title}</h5>
              <p>{card.text}</p>
              <Link to="/">
                Read more
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};
