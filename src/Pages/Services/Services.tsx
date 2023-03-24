import { ContentServices } from "./Components/Content/ContentServices";
import { Stat } from "../Home/Components/Stat/stat";
import { FormContactsUs } from "Components/FormContactsUs/FormContactsUs";
import { FormSub } from "Components/FormSub/FormSub";
import { HeaderPage } from "Components/HeaderPage/HeaderPage";

function Services() {
  return (
    <>
      <HeaderPage title={"Data Analytics Services"} supTitle={"Services"} />/
      <ContentServices />
      <Stat />
      <FormContactsUs />
      <FormSub />
    </>
  );
}

export { Services };
