// Styles
import s from "./_BlogContent.module.scss";
// Toast(Mess)
import toast, { Toaster } from "react-hot-toast";
// Axios
import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
// Components
import { IPost } from "Models/postBlog";
import { Loader } from "Components/Loader/Loader";
import { Link, useSearchParams } from "react-router-dom";
// FontEwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
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
// Data
import { popularPosts } from "Data/popularPost";

export const BlogContent: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("post") || "";
  // Messages
  const succ = () =>
    toast.success(<span data-page={page}>Posts received!</span>, {
      duration: 3000,
    });
  const err = () =>
    toast.error(
      <span>
        Error! Data not received...
        <button onClick={() => toast.dismiss()}>
          {" "}
          <FontAwesomeIcon icon={faClose} />
        </button>
      </span>,
      { duration: 3000 }
    );
  // ----
  const [posts, setPosts] = useState<IPost[]>([]);
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
      setPosts(resp.data);
      succ();
      setLoader(false);
    } catch (e: unknown) {
      err();
      setLoader(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchDataPosts();
  }, [postQuery, page]);
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
      key: "1",
    },
    {
      title: "Embed analytics",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
      key: "2",
    },
    {
      title: "Data analytics",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
      key: "3",
    },
    {
      title: "Big data consulting",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
      key: "4",
    },
    {
      title: "Artificial intelligence",
      value1: "Software development",
      value2: "Information security",
      value3: "Internet of things",
      value4: "Digital transformation",
      value5: "Healthcare it",
      key: "5",
    },
  ];
  const blogTags = [
    { value: "All topics", key: "1" },
    { value: "App", key: "2" },
    { value: "Management", key: "3" },
    { value: "CMR", key: "4" },
    { value: "Big data", key: "5" },
    { value: "Media", key: "6" },
    { value: "Future", key: "7" },
    { value: "CIO", key: "8" },
    { value: "Startup", key: "9" },
    { value: "Team", key: "10" },
    { value: "Data", key: "11" },
    { value: "Data analytics", key: "12" },
    { value: "Information security", key: "13" },
    { value: "Proxy", key: "14" },
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
              {posts
                .filter((post) => post.title.includes(postQuery))
                .map((post) => (
                  <div className={s.blogPostsItem} key={post.id}>
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
                {popularPosts.map((post) => (
                  <div className={s.blogSideBarPostsItem} key={post.id}>
                    <img src={post.img} alt="" />
                    <div className={s.blogSideBarPostsInfo}>
                      <pre>{post.date}</pre>
                      <h5>{post.title}</h5>
                      <Link to="/blog">Read more</Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className={s.blogSideBarCategorisDesctop}>
                <h4>Categories</h4>
                <Accordion
                  className={s.szhAccordion}
                  transition
                  transitionTimeout={200}
                >
                  {acardionBlogItems.map((slide) => (
                    <AccordionItem
                      key={slide.key}
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
                  {blogTags.map((tag) => (
                    <div key={tag.key}>{tag.value}</div>
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
