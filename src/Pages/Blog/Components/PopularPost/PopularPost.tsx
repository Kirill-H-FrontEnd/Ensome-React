// Styles
import s from "../Content/BlogContent.module.scss";
// Models
import { IPopularPost } from "Models/popularPost";
import axios from "axios";
import { useQuery } from "react-query";
// Router
import { Link } from "react-router-dom";

export const PopularPost: React.FC = () => {
  const {
    data: resp,
    isError,
    isSuccess,
  } = useQuery("blogPopularPosts", () => fetchDataPopularPosts());

  const DATA_URL = "http://localhost:3001";
  axios.defaults.baseURL = DATA_URL;
  const fetchDataPopularPosts = async () => {
    return axios.get(`/popularPosts`);
  };

  return (
    <>
      {isError && <p>Erorr!</p>}
      {isSuccess &&
        resp.data.map((post: IPopularPost) => (
          <div className={s.blogSideBarPostsItem}>
            <img src={post.img} alt="" />
            <div className={s.blogSideBarPostsInfo}>
              <pre>22 June 2022</pre>
              <h5>{post.title}</h5>
              <Link to="/blog">Read more</Link>
            </div>
          </div>
        ))}
    </>
  );
};
