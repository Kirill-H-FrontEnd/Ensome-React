// Styles
import s from "./Fitches.module.scss";
// import Atropos component
import Atropos from "atropos/react";
// Swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// Imgs
import icon1 from "Images/HomePage/Fitches/icon1.svg";
import icon2 from "Images/HomePage/Fitches/icon2.svg";
import icon3 from "Images/HomePage/Fitches/icon3.svg";
import { useAnimate } from "Hooks/useAnimate";

export const Fitches: React.FC = () => {
  useAnimate(s.active);
  const fitchesCards = [
    {
      icon: icon1,
      title: "Embed analytics",
      p: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      icon: icon2,
      title: "Machine learning",
      p: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      icon: icon3,
      title: "Access control",
      p: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
  ];

  return (
    <>
      <section className={s.fitchesHomePage}>
        <div className="box">
          <section className={s.fitchesInner}>
            <section className={`${s.fitchesHeader} animate`}>
              <h2 data-aos="fade-up">
                Why our clients
                <br /> chosse Ensome?
              </h2>
              <p>
                Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo.
              </p>
            </section>
            <section className={s.fitchesCards}>
              {fitchesCards.map((card, i) => (
                <Atropos
                  key={i}
                  rotateXMax={8}
                  rotateYMax={8}
                  activeOffset={25}
                  rotateTouch={false}
                  highlight={false}
                  shadow={false}
                  className={`${s.atropos} animate`}
                >
                  <div className={`${s.fitchesCard} ${s.desktop}`}>
                    <img src={card.icon} alt="" />
                    <h3>{card.title}</h3>
                    <p>{card.p}</p>
                  </div>
                </Atropos>
              ))}
              {/* Swiper */}
              <Swiper
                className={s.swiper}
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  bulletClass: `swiper-pagination-bullet ${s.swiper_pagination_bullet}`,
                }}
              >
                {fitchesCards.map((card, i) => (
                  <SwiperSlide key={i}>
                    <div className={`${s.fitchesCard} animate`}>
                      <img src={card.icon} alt="" />
                      <h3>{card.title}</h3>
                      <p>{card.p}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};
