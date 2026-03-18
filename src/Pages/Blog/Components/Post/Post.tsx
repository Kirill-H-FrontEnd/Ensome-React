import s from "../Content/BlogContent.module.scss";
import { Link } from "react-router-dom";
import { IPost } from "Models/postBlog";
import { BLOG_POSTS } from "Data/staticData";

interface IPostProps {
  page: number;
  postQuery: string;
}

const POSTS_PER_PAGE = 3;

export const Post: React.FC<IPostProps> = ({ page, postQuery }) => {
  const filtered = BLOG_POSTS.filter((post: IPost) =>
    post.title.toLowerCase().includes(postQuery.toLowerCase()),
  );

  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <>
      {paginated.map((post: IPost) => (
        <div key={post.id} className={s.blogPostsItem}>
          <img src={post.image} alt={post.title} />
          <div className={s.blogPostsInfo}>
            <pre>22 June 2024</pre>
            <h5>{post.title}</h5>
            <p>{post.description}</p>
            <strong>Rate: {post.rating.rate}</strong>
            <Link to={`/Blog/${post.id}`}>Read more</Link>
          </div>
        </div>
      ))}
    </>
  );
};
