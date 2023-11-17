import axios from "axios";
// Styles
import s from "../Content/BlogContent.module.scss";
// Router
import { Link } from "react-router-dom";
// Models
import { IPost } from "Models/postBlog";
import { useQuery } from "react-query";
import { Loader } from "Components/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { Error } from "Components/Error/Error";

interface IPostProps {
  page: number;
  postQuery: string;
}

export const Post: React.FC<IPostProps> = ({ page, postQuery }) => {
  const {
    data: resp,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(["blogPosts", page, postQuery], () => fetchDataPosts());

  const DATA_URL = "http://localhost:3001";
  axios.defaults.baseURL = DATA_URL;
  const fetchDataPosts = async () => {
    return axios.get(
      `/blogPosts?title_like${postQuery}&_limit=3&_page=${page}`
    );
  };

  const filterPosts = resp?.data.filter((post: IPost) => {
    return post.title.toLowerCase().includes(postQuery.toLowerCase());
  });

  return (
    <>
      {isLoading && (
        <span className={s.loader}>
          <Loader />
        </span>
      )}
      {isError && <Error value="Data error! Posts not loaded..." />}
      {isSuccess &&
        filterPosts.map((post: IPost) => (
          <div key={post.id} className={s.blogPostsItem}>
            <img src={post.image} alt="" />
            <div className={s.blogPostsInfo}>
              <pre>22 June 2022</pre>
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
