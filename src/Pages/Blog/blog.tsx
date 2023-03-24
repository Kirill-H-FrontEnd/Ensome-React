// Components
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { BlogContent } from "./Components/Content/BlogContent";

export const Blog: React.FC = () => {
  return (
    <>
      <HeaderPage
        title={"Discover new things with Ensome blog"}
        supTitle={"Blog"}
      />
      <BlogContent />
    </>
  );
};
