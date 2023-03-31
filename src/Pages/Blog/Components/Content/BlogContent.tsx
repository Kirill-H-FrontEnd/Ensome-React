// Styles
import s from "./BlogContent.module.scss";
// Toast(Mess)
import toast, { Toaster } from "react-hot-toast";
// Axios
import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
// Components
import { IPost } from "Models/postBlog";
import { Loader } from "Components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import { Post } from "../Post/Post";
import { PopularPost } from "../PopularPost/PopularPost";
// FontEwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
// Pagination
import { Pagination } from "@mui/material";
// Hooks
import { useScrollTopSmooth } from "Hooks/useScrollTopSmooth";
// Accordion
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
const AccordionItem = ({ ...rest }) => (
  <Item
    {...rest}
    className={s.accordion}
    headingProps={{
      className: ({ isEnter }) =>
        `${s.accordionHeader} ${isEnter && s.accordionHeaderExpanded}`,
    }}
    buttonProps={{
      className: ({ isEnter }) =>
        `${s.accordionBtn} ${isEnter && s.accordionBtnExpanded}`,
    }}
    contentProps={{ className: s.accordionContent }}
    panelProps={{ className: s.accordionPanel }}
  />
);
// Models
import { IPopularPost } from "Models/popularPost";
import { useQuery } from "react-query/types/react";

export const BlogContent: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("post") || "";
  // Messages
  const succ = () =>
    toast.success(<span data-page={page}>Posts received!</span>, {
      duration: 3000,
    });
  const err = () =>
    toast.error(<span>Error! Data not received...</span>, { duration: 3000 });
  // ----
  const [post, setPost] = useState<IPost[]>([]);
  const [popularPost, setPopularPost] = useState<IPopularPost[]>([]);
  const [loader, setLoader] = useState(false);
  const [isError, setError] = useState(false);
  const [pageQty, setPageQty] = useState(0); // impossible
  const [page, setPage] = useState<number>(1);

  const fetchDataPosts = async () => {
    try {
      setLoader(true);
      const resp = await axios.get<IPost[]>(
        `http://localhost:3001/blogPosts?title_like${postQuery}&_limit=3&_page=${page}`
      );
      setPost(resp.data);
      succ();
      console.log(resp);
      setLoader(false);
    } catch (e: unknown) {
      err();
      setLoader(false);
      setError(true);
    }
  };
  const fetchDataPopularPosts = async () => {
    try {
      setLoader(true);
      const resp = await axios.get<IPopularPost[]>(
        `http://localhost:3001/popularPosts`
      );
      setPopularPost(resp.data);
      setLoader(false);
    } catch (e: unknown) {
      setLoader(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchDataPosts();
    fetchDataPopularPosts();
  }, [page, postQuery]);
  // Change pages pagination
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    useScrollTopSmooth();
    setPage(value);
  };
  const [search, setSearch] = useState(postQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const query = form.search.value;
    setSearchParams({ post: query });
  };
  // Arrays items
  const acardionBlogItems = [
    {
      title: "Machine learning",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
    },
    {
      title: "Embed analytics",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
    },
    {
      title: "Data analytics",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
    },
    {
      title: "Big data consulting",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
    },
    {
      title: "Artificial intelligence",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
    },
  ];
  const blogTags = [
    { value: "All topics" },
    { value: "App" },
    { value: "Management" },
    { value: "CMR" },
    { value: "Big data" },
    { value: "Media" },
    { value: "Future" },
    { value: "CIO" },
    { value: "Startup" },
    { value: "Team" },
    { value: "Data" },
    { value: "Data analytics" },
    { value: "Information security" },
    { value: "Proxy" },
  ];
  return (
    <>
      <section className={s.blogContent}>
        <div className="box">
          <section className={s.blogContentInner}>
            <section className={s.blogPosts}>
              <div className={s.message}>
                <Toaster position="bottom-center" reverseOrder={false} />
              </div>
              {loader && (
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
              {post
                .filter((post) => post.title.includes(postQuery))
                .map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              <Pagination
                onChange={handleChange}
                count={4}
                page={page}
                color="primary"
              />
            </section>
            <section className={s.blogSideBar}>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search posts"
                  name="search"
                />
                <button type="submit">Search</button>
              </form>
              <div className={s.blogSideBarCategoriesMobil}>
                <Accordion
                  className={s.szhAccordion}
                  transition
                  transitionTimeout={200}
                >
                  <AccordionItem
                    header={
                      <>
                        {"All categories"}
                        <FontAwesomeIcon icon={faChevronDown} />
                      </>
                    }
                  >
                    <a href="">Software development</a>
                    <a href="">Information security</a>
                    <a href="">Internet of things</a>
                    <a href="">Digital transformation</a>
                    <a href="">Healthcare it</a>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className={s.blogSideBarPosts}>
                <h4>Popular posts</h4>
                {popularPost.map((post) => (
                  <PopularPost key={post.id} post={post} />
                ))}
              </div>
              <div className={s.blogSideBarCategorisDesctop}>
                <h4>Categories</h4>
                <Accordion
                  className={s.szhAccordion}
                  transition
                  transitionTimeout={200}
                >
                  {acardionBlogItems.map((slide, i) => (
                    <AccordionItem
                      key={i}
                      header={
                        <>
                          {slide.title}
                          <FontAwesomeIcon icon={faChevronDown} />
                        </>
                      }
                    >
                      <a href="">{slide.value1}</a>
                      <a href="">{slide.value2}</a>
                      <a href="">{slide.value3}</a>
                      <a href="">{slide.value4}</a>
                      <a href="">{slide.value5}</a>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className={s.blogSideBarTags}>
                <h4>Tags</h4>
                <div className={s.tagsItems}>
                  {blogTags.map((tag, i) => (
                    <div key={i}>{tag.value}</div>
                  ))}
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};
