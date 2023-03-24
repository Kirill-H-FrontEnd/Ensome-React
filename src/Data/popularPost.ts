import { IPopularPost } from "../Models/popularPost";
// Imgs
import img1 from "../Images/BlogPage/SideBarPosts/img_1.jpg";
import img2 from "../Images/BlogPage/SideBarPosts/img_2.jpg";
import img3 from "../Images/BlogPage/SideBarPosts/img_3.jpg";
import img4 from "../Images/BlogPage/SideBarPosts/img_4.jpg";

export const popularPosts: IPopularPost[] = [
  {
    id: 1,
    date: "22 June 2022",
    title: "ISO 13485 compliance of medical devices",
    img: img1,
  },
  {
    id: 2,
    date: "22 June 2022",
    title: "Business analysis helps you  in finance",
    img: img2,
  },
  {
    id: 3,
    date: "22 June 2022",
    title: "Benefits of telemedicine in nursing homes",
    img: img3,
  },
  {
    id: 4,
    date: "22 June 2022",
    title: "5 web portal examples your business can learn from",
    img: img4,
  },
];
