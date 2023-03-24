// Styles
import s from "./_Questions.module.scss";
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
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Questions: React.FC = () => {
  const questionsItems = [
    {
      title: "What are data analytics?",
      value:
        "Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ",
      key: "1",
    },
    {
      title: "What is data mining?",
      value:
        "Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ",
      key: "2",
    },
    {
      title: "What is business intelligence?",
      value:
        "Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ",
      key: "3",
    },
    {
      title: "What is exploratory data analysis (EDA)?",
      value:
        "Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ",
      key: "4",
    },
    {
      title: "What is confirmatory data analysis (CDA)?",
      value:
        "Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ",
      key: "5",
    },
    {
      title: "What is data visualisation",
      value:
        "Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ",
      key: "6",
    },
    {
      title: "What are predictive analytics?",
      value:
        "Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ",
      key: "7",
    },
  ];
  return (
    <>
      <section className={s.questionsFaqPage}>
        <div className="box">
          <section className={s.questionsContent}>
            <Accordion
              className={s.szhAccordion}
              transition
              transitionTimeout={200}
            >
              {questionsItems.map((item) => (
                <AccordionItem
                  key={item.key}
                  header={
                    <>
                      {item.title}
                      <FontAwesomeIcon icon={faChevronDown} />
                    </>
                  }
                >
                  <p>{item.value}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>
    </>
  );
};
