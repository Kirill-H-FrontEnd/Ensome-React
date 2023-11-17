// Models
import { TComment } from "Models/comments";
// Styles
import s from "./Slider.module.scss";
// Swiper
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// Hooks
import { useAnimate } from "Hooks/useAnimate";
// ReactQuery
import { useQuery } from "react-query";
// Axios
import axios from "axios";
// Components
import { Loader } from "Components/Loader/Loader";
import { Error } from "Components/Error/Error";

export const Slider: React.FC = () => {
  useAnimate(s.active);
  const {
    data: resp,
    isLoading,
    isError,
    isSuccess,
  } = useQuery("blogPopularPosts", () => fetchDataComments());
  const DATA_URL = "http://localhost:3001";
  axios.defaults.baseURL = DATA_URL;
  const fetchDataComments = async () => {
    return axios.get(`/comments`);
  };
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
                {isLoading && (
                  <div className={s.loader}>
                    <Loader />
                  </div>
                )}
                {isError && (
                  <Error value="Data error! Comments not loaded..." />
                )}
                {isSuccess &&
                  resp?.data.map((slide: TComment, i: number) => (
                    <SwiperSlide key={i}>
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
