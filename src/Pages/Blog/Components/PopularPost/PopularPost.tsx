import s from "../Content/BlogContent.module.scss";
import { IPopularPost } from "Models/popularPost";
import { Link } from "react-router-dom";
import { POPULAR_POSTS } from "Data/staticData";

export const PopularPost: React.FC = () => {
  return (
    <>
      {POPULAR_POSTS.map((post: IPopularPost) => (
        <div key={post.id} className={s.blogSideBarPostsItem}>
          <img src={post.img} alt={post.title} />
          <div className={s.blogSideBarPostsInfo}>
            <pre>{post.date}</pre>
            <h5>{post.title}</h5>
            <Link to="/Blog">Read more</Link>
          </div>
        </div>
      ))}
    </>
  );
};
