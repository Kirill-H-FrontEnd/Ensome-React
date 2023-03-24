// Styles
import s from "./_OurCompany.module.scss";
// Images
import Img1 from "Images/AboutUsPage/OurCompany/OurCompanyImg1.jpg";
import Img2 from "Images/AboutUsPage/OurCompany/OurCompanyImg2.jpg";

export const OurCompany: React.FC = () => {
  return (
    <>
      <section className={s.ourCompanyAboutUsPage}>
        <div className="box">
          <div className={s.ourCompanyInner}>
            <section className={s.ourCompanyTop}>
              <section>
                <h2>Who we are</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Donec tincidunt tempor
                  quam, non mollis quam finibus nec. Quisque finibus consequat
                  felis vel pretium. Aliquam gravida nisi vel convallis
                  ultricies. Integer ante sapien, consequat et dolor vel, cursus
                  lacinia lectus.
                </p>
              </section>
              <figure>
                <img src={Img1} alt="" />
              </figure>
            </section>
            <section className={s.ourCompanyBottom}>
              <figure>
                <img src={Img2} alt="" />
              </figure>
              <section>
                <h2>Our mission</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Donec tincidunt tempor
                  quam, non mollis quam finibus nec. Quisque finibus consequat
                  felis vel pretium.{" "}
                </p>
              </section>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
