// Styles
import s from "./BlogContent.module.scss";
// Hooks
import { useState } from "react";
// Components
import { useSearchParams } from "react-router-dom";
import { Post } from "../Post/Post";
import { PopularPost } from "../PopularPost/PopularPost";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
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

export const BlogContent: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("post") || "";
  // ----
  const [pageQty, setPageQty] = useState(0); // impossible
  const [page, setPage] = useState<number>(1);

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
  const accordionBlogItems = [
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
              {/* Posts */}
              <Post page={page} postQuery={postQuery} />
              <Pagination
                onChange={handleChange}
                count={4}
                page={page}
                color="primary"
              />
            </section>
            {/* SideBar */}
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
                {/* Popular Posts */}
                <PopularPost />
              </div>
              <div className={s.blogSideBarCategorisDesctop}>
                <h4>Categories</h4>
                <Accordion
                  className={s.szhAccordion}
                  transition
                  transitionTimeout={200}
                >
                  {accordionBlogItems.map((slide, i) => (
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
