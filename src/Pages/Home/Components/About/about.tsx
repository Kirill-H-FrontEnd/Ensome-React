// Styles
import s from "./About.module.scss";
// import Atropos component
import Atropos from "atropos/react";
import Button from "@mui/material/Button";
// Imgs About
import imgAbout1 from "Images/HomePage/About/about1.jpg";
import imgAbout2 from "Images/HomePage/About/about2.jpg";
import { useAnimate } from "Hooks/useAnimate";

export const About: React.FC = () => {
  useAnimate(s.active);
  return (
    <>
      <section className={s.aboutHomePage}>
        <div className="box">
          <section className={s.aboutInner}>
            <section className={`${s.aboutTop} animate`}>
              <section>
                <h2>The newest business analytics platform</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <a href="">
                  <Button className={s.btn} variant="contained">
                    Learn more
                  </Button>
                </a>
              </section>
              <figure>
                <Atropos
                  rotateXMax={5}
                  rotateYMax={5}
                  activeOffset={15}
                  rotateTouch={false}
                  highlight={false}
                  shadow={false}
                >
                  <img src={imgAbout1} alt="" />
                </Atropos>
              </figure>
            </section>
            <section className={`${s.aboutBottom} animate`}>
              <figure>
                <Atropos
                  rotateXMax={5}
                  rotateYMax={5}
                  activeOffset={15}
                  rotateTouch={false}
                  highlight={false}
                  shadow={false}
                >
                  <img src={imgAbout2} alt="" />
                </Atropos>
              </figure>
              <section>
                <h2>Radically new data solutions</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <a href="">
                  <Button className={s.btn} variant="contained">
                    Learn more
                  </Button>
                </a>
              </section>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};
