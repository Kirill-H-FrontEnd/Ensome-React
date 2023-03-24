// Styles
import s from "./_Slider.module.scss";
// Swiper
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// Imgs
import photo1 from "Images/HomePage/Comments/Photo1.jpg";
import photo2 from "Images/HomePage/Comments/Photo2.jpg";
import { useAnimate } from "Hooks/useAnimate";

export const Slider: React.FC = () => {
  useAnimate(s.active);
  const sliderSlideItems = [
    {
      key: "1",
      photo1: photo1,
      photo2: photo2,
      text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” ",
      name: "Alex Bern ",
      proff1: "CEO by PixelPerfect",
      proff2: "CEO by NOX",
    },
    {
      key: "2",
      photo1: photo1,
      photo2: photo2,
      text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” ",
      name: "Alex Bern ",
      proff1: "CEO by PixelPerfect",
      proff2: "CEO by NOX",
    },
    {
      key: "3",
      photo1: photo1,
      photo2: photo2,
      text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” ",
      name: "Alex Bern ",
      proff1: "CEO by PixelPerfect",
      proff2: "CEO by NOX",
    },
  ];
  return (
    <>
      <section className={s.slider}>
        <div className="box">
          <section className={`${s.sliderInner} animate`}>
            <section className={s.sliderHeader}>
              <h2>Trusted by the best in the business</h2>
            </section>
            <section className={s.sliderContent}>
              <Swiper
                className={s.swiper}
                modules={[Pagination, A11y]}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  bulletClass: `swiper-pagination-bullet ${s.swiper_pagination_bullet}`,
                }}
              >
                {sliderSlideItems.map((slide) => (
                  <SwiperSlide key={slide.key}>
                    <div className={s.sliderSlide}>
                      <div className={s.sliderSlideItem}>
                        <img src={slide.photo1} alt="" />
                        <p>{slide.text}</p>
                        <div className={s.sliderSlideInfo}>
                          <h5>{slide.name}</h5>
                          <pre>{slide.proff1}</pre>
                        </div>
                      </div>
                      <div className={s.sliderSlideItem}>
                        <img src={slide.photo2} alt="" />
                        <p>{slide.text}</p>
                        <div className={s.sliderSlideInfo}>
                          <h5>{slide.name}</h5>
                          <pre>{slide.proff2}</pre>
                        </div>
                      </div>
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
