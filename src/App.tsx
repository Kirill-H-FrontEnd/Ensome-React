// Styles
import "./scss/index.scss";
import "atropos/css";
// Router
import { Route, Routes, useLocation } from "react-router-dom";
// Pages
import { Layout } from "./Components/Layout";
import { Home } from "./Pages/Home/Home";
import { Services } from "./Pages/Services/Services";
import { AboutUs } from "./Pages/AboutUs/aboutUs";
import { Blog } from "./Pages/Blog/blog";
import { BlogPost } from "./Pages/BlogPost/blogPost";
// import { Contacts } from "./Pages/Contacts/Contacts";
import { OurTeam } from "./Pages/OurTeam/OurTeam";
import { TeamCard } from "./Pages/TeamCard/teamCard";
import { FAQ } from "./Pages/FAQ/FAQ";
import { Solutions } from "./Pages/Solutions/Solutions";
import { Authorization } from "./Pages/Authorization/Authorization";
import { useScrollTop } from "./Hooks/useScrollTop";
import { TodoApp } from "./Pages/TodoApp/TodoApp";
import { useEffect } from "react";
// import { NotFoundPage } from "./Pages/NotFoundPage/Notfoundpage";

function App() {
  // Title Page
  let location = useLocation();
  document.title = location.pathname.replace("/", "");
  // Scroll page to top
  useEffect(() => {
    useScrollTop();
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Services" element={<Services />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Blog/:postsId" element={<BlogPost />} />
        {/* <Route path="Contacts" element={<Contacts />} /> */}
        <Route path="OurTeam" element={<OurTeam />} />
        <Route path="OurTeam/:name/:id/" element={<TeamCard />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="Solutions" element={<Solutions />} />
        <Route path="TodoApp" element={<TodoApp />} />
        <Route path="Authorization" element={<Authorization />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
