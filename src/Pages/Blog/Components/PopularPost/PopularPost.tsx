// Styles
import s from "../Content/BlogContent.module.scss";
// Models
import { IPopularPost } from "Models/popularPost";
// Axios
import axios from "axios";
// React Query
import { useQuery } from "react-query";
// Router
import { Link } from "react-router-dom";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { Loader } from "Components/Loader/Loader";

export const PopularPost: React.FC = () => {
  const {
    data: resp,
    isLoading,
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
      {isLoading && (
        <span className={s.loader}>
          <Loader />
        </span>
      )}
      {isError && (
        <span className={s.error}>
          <h1>Data error! Posts not loaded...</h1>
          <a href="">
            <FontAwesomeIcon icon={faArrowsRotate} />
          </a>
        </span>
      )}
      {isSuccess &&
        resp.data.map((post: IPopularPost) => (
          <div key={post.id} className={s.blogSideBarPostsItem}>
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
