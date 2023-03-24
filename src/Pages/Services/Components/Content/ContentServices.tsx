// Styles
import s from "./_ContentService.module.scss";
// Button
import Button from "@mui/material/Button";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// Accordion
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
const AccordionItem = ({ ...rest }) => (
  <Item
    {...rest}
    className={s.accordion}
    headingProps={{
      className: ({ isEnter }) =>
        `${s.accordionHeader} ${isEnter && s.accordionHeaderExpanded}`,
    }}
    buttonProps={{
      className: ({ isEnter }) =>
        `${s.accordionBtn} ${isEnter && s.accordionBtnExpanded}`,
    }}
    contentProps={{ className: s.accordionContent }}
    panelProps={{ className: s.accordionPanel }}
  />
);
// Imgs
import Img1 from "Images/ServicesPage/Intro/IntroImg1.jpg";
import Img2 from "Images/ServicesPage/Intro/IntroImg2.jpg";

function ContentServices() {
  const acardionItems = [
    {
      title: "Machine learning",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
      key: "1",
    },
    {
      title: "Embed analytics",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
      key: "2",
    },
    {
      title: "Data analytics",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
      key: "3",
    },
    {
      title: "Big data consulting",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
      key: "4",
    },
    {
      title: "Artificial intelligence",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
      key: "5",
    },
  ];

  return (
    <section className={s.introServicesPage}>
      <div className="box">
        <section className={s.introInner}>
          <section className={s.introContent}>
            <div className={s.introContentCustomer}>
              <h3>Customer</h3>
              <p>
                Donec tincidunt tempor quam, non mollis quam finibus nec.
                Quisque finibus consequat felis vel pretium. Aliquam gravida
                nisi vel convallis ultricies. Integer ante sapien, consequat et
                dolor vel.
              </p>
              <img src={Img1} alt="" />
            </div>
            <div className={s.introContentChallenge}>
              <h3>Challenge</h3>
              <p>
                Donec tincidunt tempor quam, non mollis quam finibus nec.
                Quisque finibus consequat felis vel pretium. Aliquam gravida
                nisi vel convallis ultricies. Integer ante sapien, consequat et
                dolor vel. Morbi urna massa, imperdiet in mauris et, euismod
                vestibulum lacus. Integer enim elit, tincidunt aliquam ligula
                id, lacinia auctor orci.
              </p>
            </div>
            <div className={s.introContentSolution}>
              <h3>Solution</h3>
              <p>
                Donec tincidunt tempor quam, non mollis quam finibus nec.
                Quisque finibus consequat felis vel pretium. Aliquam gravida
                nisi vel convallis ultricies. Integer ante sapien, consequat et
                dolor vel.
              </p>
              <img src={Img2} alt="" />
            </div>
            <div className={s.introContentResults}>
              <h3>Results</h3>
              <p>
                Donec tincidunt tempor quam, non mollis quam finibus nec.
                Quisque finibus consequat felis vel pretium. Aliquam gravida
                nisi vel convallis ultricies. Integer ante sapien, consequat et
                dolor vel. Morbi urna massa, imperdiet in mauris et, euismod
                vestibulum lacus. Integer enim elit, tincidunt aliquam ligula
                id, lacinia auctor orci.
              </p>
            </div>
            <div className={s.introContentTechnologies}>
              <h3>Technologies</h3>
              <p>
                Donec tincidunt tempor quam, non mollis quam finibus nec.
                Quisque finibus consequat felis vel pretium. Aliquam gravida
                nisi vel convallis ultricies. Integer ante sapien, consequat et
                dolor vel.
              </p>
            </div>
          </section>
          <section className={s.introNavBar}>
            <form action="">
              <input type="text" placeholder="Search" />
              <Button type="submit" variant="contained">
                Send
              </Button>
            </form>
            <h4>Services</h4>
            <Accordion
              className={s.szhAccordion}
              transition
              transitionTimeout={200}
            >
              {acardionItems.map((slide) => (
                <AccordionItem
                  key={slide.key}
                  header={
                    <>
                      {slide.title}
                      <FontAwesomeIcon icon={faChevronDown} />
                    </>
                  }
                >
                  <a href="">{slide.value1}</a>
                  <a href="">{slide.value2}</a>
                  <a href="">{slide.value3}</a>
                  <a href="">{slide.value4}</a>
                  <a href="">{slide.value5}</a>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </section>
      </div>
    </section>
  );
}

export { ContentServices };
