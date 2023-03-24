import { FormSub } from "Components/FormSub/FormSub";
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { Team } from "./Components/Team/team";

export const OurTeam: React.FC = () => {
  return (
    <>
      <HeaderPage title={"Get to know us closer"} supTitle={"Our team"} />
      <Team />
      <FormSub />
    </>
  );
};
