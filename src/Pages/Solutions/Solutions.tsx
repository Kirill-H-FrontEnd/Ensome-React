import { FormContactsUs } from "Components/FormContactsUs/FormContactsUs";
import { FormSub } from "Components/FormSub/FormSub";
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { Slider } from "Components/Slider/Slider";
import { Cards } from "./Components/Cards/Cards";

function Solutions() {
  return (
    <>
      <HeaderPage title={"Data analytics solutions"} supTitle={"Solutions"} />
      <Cards />
      <Slider />
      <FormContactsUs />
      <FormSub />
    </>
  );
}

export { Solutions };
