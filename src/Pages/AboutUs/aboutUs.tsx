// Components
import { OurCompany } from "./Components/OurCompany/ourCompany";
import { Stat } from "./Components/Stat/stat";
import { FormContactsUs } from "Components/FormContactsUs/FormContactsUs";
import { FormSub } from "Components/FormSub/FormSub";
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { Slider } from "Components/Slider/Slider";

export const AboutUs: React.FC = () => {
  return (
    <>
      <HeaderPage
        title={"We work with 15 years of experience"}
        supTitle={"About Us"}
      />
      <OurCompany />
      <Stat />
      <Slider />
      <FormContactsUs />
      <FormSub />
    </>
  );
};
