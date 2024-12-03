// Styles
import s from "./Intro.module.scss";
// Marquee
import Marquee from "react-fast-marquee";
// import Atropos component
import Atropos from "atropos/react";
import Button from "@mui/material/Button";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
// Router
import { Link } from "react-router-dom";
// Images
import IntroImg from "Images/HomePage/Intro/IntroImg.jpg";
import logo1 from "Images/HomePage/Intro/logo1.svg";
import logo2 from "Images/HomePage/Intro/logo2.svg";
import logo3 from "Images/HomePage/Intro/logo3.svg";
import logo4 from "Images/HomePage/Intro/logo4.svg";
import logo5 from "Images/HomePage/Intro/logo5.svg";
import logo6 from "Images/HomePage/Intro/logo6.svg";

const companiesImgs = [
  {
    img: logo1,
  },
  {
    img: logo2,
  },
  {
    img: logo3,
  },
  {
    img: logo4,
  },
  {
    img: logo5,
  },
  {
    img: logo6,
  },
];

export const Intro: React.FC = () => {
  return (
    <>
      <section className={s.introHomePage}>
        <div className="box">
          <section className={s.introInner}>
            <section>
              <h1>Find true power in your data with Ensome</h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className={s.introButtons}>
                <Link to="">
                  <Button className={s.btn} variant="contained">
                    Learne more
                  </Button>
                </Link>
                <a target={"_blank"} href="https://www.youtube.com/">
                  <FontAwesomeIcon icon={faPlay} />
                  Watch the demo
                </a>
              </div>
            </section>
            <figure>
              <Atropos
                rotateXMax={8}
                rotateYMax={8}
                activeOffset={25}
                rotateTouch={false}
                highlight={false}
                shadow={false}
              >
                <img src={IntroImg} alt="" width={600} />
              </Atropos>
            </figure>
          </section>
        </div>
        <section className={s.introCompanies}>
          <Marquee className={s.marquee} speed={30} pauseOnHover={true}>
            <div className={s.introMarquee}>
              {companiesImgs.map((img, i) => (
                <a key={i} href="">
                  <img src={img.img} alt="" />
                </a>
              ))}
            </div>
          </Marquee>
        </section>
      </section>
    </>
  );
};
