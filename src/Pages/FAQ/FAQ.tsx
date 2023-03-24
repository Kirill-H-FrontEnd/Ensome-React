// Components
import { FormHelp } from "Components/FormHelp/FormHelp";
import { FormSub } from "Components/FormSub/FormSub";
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { Questions } from "./Components/Questions/Questions";
export const FAQ: React.FC = () => {
  return (
    <>
      <HeaderPage title={"Frequently asked questions"} supTitle={"FAQs"} />
      <Questions />
      <FormHelp />
      <FormSub />
    </>
  );
};
