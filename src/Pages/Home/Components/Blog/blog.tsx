// Styles
import s from "./Blog.module.scss";
// import Atropos component
import Atropos from "atropos/react";
// Button
import Button from "@mui/material/Button";
// Swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// Router
import { Link } from "react-router-dom";
import { useAnimate } from "Hooks/useAnimate";

export const Blog: React.FC = () => {
  useAnimate(s.active);
  // Arrays items
  const blogCard = [
    {
      date: "22 June 2020",
      title: "Sed ut perspiciatis unde omnis at vero blanditils",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... ",
      btn1: "Proxy",
      btn2: "VPN",
    },
    {
      date: "22 June 2020",
      title: "Sed ut perspiciatis unde omnis at vero blanditils",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... ",
      btn1: "Proxy",
      btn2: "VPN",
    },
    {
      date: "22 June 2020",
      title: "Sed ut perspiciatis unde omnis at vero blanditils",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... ",
      btn1: "Proxy",
      btn2: "VPN",
    },
  ];
  return (
    <>
      <section className={s.blogHomePage}>
        <div className="box">
          <section className={s.blogInner}>
            <section className={`${s.blogHeader} animate`}>
              <h2>Glad to help your success</h2>
            </section>
            <section className={s.blogCards}>
              {blogCard.map((card, i) => (
                <Atropos
                  key={i}
                  rotateXMax={5}
                  rotateYMax={5}
                  activeOffset={15}
                  rotateTouch={false}
                  highlight={false}
                  shadow={false}
                  className={`${s.atropos} animate`}
                >
                  <div className={`${s.blogCard} ${s.desktop}`}>
                    <pre>{card.date}</pre>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <div className={s.blogCardButtons}>
                      <a href="">{card.btn1}</a>
                      <a href="">{card.btn2}</a>
                    </div>
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
                {blogCard.map((card, i) => (
                  <SwiperSlide key={i}>
                    <div className={`${s.blogCard} animate`}>
                      <pre>{card.date}</pre>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                      <div className={s.blogCardButtons}>
                        <a href="">{card.btn1}</a>
                        <a href="">{card.btn2}</a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
            <section className={`${s.btn} animate`}>
              <Link to="Blog">
                <Button variant="contained">Learn more</Button>
              </Link>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};
