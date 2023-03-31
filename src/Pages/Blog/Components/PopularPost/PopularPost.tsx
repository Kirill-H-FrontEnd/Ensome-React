// Styles
import s from "../Content/BlogContent.module.scss";
// Models
import { IPopularPost } from "Models/popularPost";
// Router
import { Link } from "react-router-dom";

interface IPopularPostProps {
  post: IPopularPost;
}

export const PopularPost: React.FC<IPopularPostProps> = ({ post }) => {
  return (
    <>
      <div className={s.blogSideBarPostsItem}>
        <img src={post.img} alt="" />
        <div className={s.blogSideBarPostsInfo}>
          <pre>22 June 2022</pre>
          <h5>{post.title}</h5>
          <Link to="/blog">Read more</Link>
        </div>
      </div>
    </>
  );
};
