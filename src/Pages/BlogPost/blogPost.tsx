import s from "./BlogPost.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { BLOG_POSTS } from "Data/staticData";

export const BlogPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const post = BLOG_POSTS.find((p) => p.id === Number(id));

  return (
    <>
      <HeaderPage title={post?.title} supTitle={`Post ${post?.id}`} />
      <section className={s.blogPostContent}>
        <div className="box">
          <div className={s.blogPostsItem}>
            <img src={post?.image} alt={post?.title} />
            <div className={s.blogPostsInfo}>
              <h3>{post?.category}</h3>
              <h4>Rating: {post?.rating.rate}</h4>
              <p>{post?.description}</p>
              <button onClick={goBack}>Go back</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
