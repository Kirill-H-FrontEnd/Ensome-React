//  Components
import { Stat } from "./Components/Stat/stat";
import { Blog } from "./Components/Blog/blog";
import { About } from "./Components/About/about";
import { Fitches } from "./Components/Fitches/fitches";
import { Intro } from "./Components/Intro/intro";
import { FormContactsUs } from "Components/FormContactsUs/FormContactsUs";
import { FormSub } from "Components/FormSub/FormSub";
import { Slider } from "Components/Slider/Slider";

export const Home: React.FC = () => {
  document.title = "Ensome | Home";
  return (
    <>
      <Intro />
      <Fitches />
      <About />
      <Blog />
      <Slider />
      <Stat />
      <FormContactsUs />
      <FormSub />
    </>
  );
};
