// Styles
import s from "../Content/BlogContent.module.scss";
// Router
import { Link } from "react-router-dom";
// Models
import { IPost } from "Moidels/postBlog";

interface IPostProps {
  post: IPost;
}

export const Post: React.FC<IPostProps> = ({ post }) => {
  return (
    <>
      <div className={s.blogPostsItem}>
        <img src={post.image} alt="" />
        <div className={s.blogPostsInfo}>
          <pre>22 June 2022</pre>
          <h5>{post.title}</h5>
          <p>{post.description}</p>
          <strong>Rate: {post.rating.rate}</strong>
          <Link to={`/Blog/${post.id}`}>Read more</Link>
        </div>
      </div>
    </>
  );
};
