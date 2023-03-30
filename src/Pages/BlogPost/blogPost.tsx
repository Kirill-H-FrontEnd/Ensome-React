// Styles
import s from "./BlogPost.module.scss";
// Axios
import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
// Router
import { useNavigate, useParams } from "react-router-dom";
// Components
import { HeaderPage } from "Components/HeaderPage/HeaderPage";
// Models
import { IPost } from "Models/postBlog";

export const BlogPost: React.FC = () => {
  const { postsId } = useParams();
  const [post, setPost] = useState<IPost>();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const fetchDataPosts = async () => {
    try {
      const resp = await axios.get<IPost>(
        `http://localhost:3001/blogPosts/${postsId}`
      );
      setPost(resp.data);
    } catch (e: unknown) {}
  };

  useEffect(() => {
    fetchDataPosts();
  }, [postsId]);
  return (
    <>
      <HeaderPage title={post?.title} supTitle={`Post ${post?.id}`} />
      <section className={s.blogPostContent}>
        <div className="box">
          <div className={s.blogPostsItem}>
            <img src={post?.image} alt="" />
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
