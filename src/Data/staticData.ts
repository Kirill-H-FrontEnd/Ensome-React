import { IPost } from "Models/postBlog";
import { IPopularPost } from "Models/popularPost";
import { ICardTeam } from "Models/teamCard";
import { TComment } from "Models/comments";

export const BLOG_POSTS: IPost[] = [
  {
    id: 1,
    title: "How AI Is Reshaping Business Intelligence",
    description:
      "Artificial intelligence has moved from research labs into everyday business operations. From predictive analytics to natural language dashboards, discover how modern teams leverage AI to make faster, smarter decisions without sacrificing accuracy.",
    category: "Artificial Intelligence",
    image: "https://picsum.photos/seed/blog1/800/480",
    rating: { rate: 4.8, count: 312 },
  },
  {
    id: 2,
    title: "The Ultimate Guide to Data Visualisation in 2024",
    description:
      "Good charts tell stories. Great charts change decisions. We break down the principles behind effective data visualisation — from choosing the right chart type to designing for accessibility — with real-world examples from leading analytics teams.",
    category: "Data & Analytics",
    image: "https://picsum.photos/seed/blog2/800/480",
    rating: { rate: 4.6, count: 198 },
  },
  {
    id: 3,
    title: "Building a Scalable SaaS Architecture from Scratch",
    description:
      "Starting with a monolith is fine — until it isn't. This deep-dive walks through the architectural decisions behind scalable SaaS products: microservices, event-driven patterns, caching strategies and multi-tenant data isolation.",
    category: "Engineering",
    image: "https://picsum.photos/seed/blog3/800/480",
    rating: { rate: 4.9, count: 421 },
  },
  {
    id: 4,
    title: "Product-Led Growth: Strategies That Actually Work",
    description:
      "PLG is more than a buzzword. Companies like Slack, Figma and Notion built billion-dollar businesses by letting the product sell itself. We examine the tactics, metrics and team structures behind successful product-led growth motions.",
    category: "Product",
    image: "https://picsum.photos/seed/blog4/800/480",
    rating: { rate: 4.5, count: 276 },
  },
  {
    id: 5,
    title: "Designing for Trust: UX Patterns That Convert",
    description:
      "First impressions happen in milliseconds. Learn how thoughtful UX — clear value propositions, social proof placement, friction-free onboarding and micro-interactions — turns visitors into loyal customers.",
    category: "Design",
    image: "https://picsum.photos/seed/blog5/800/480",
    rating: { rate: 4.7, count: 189 },
  },
  {
    id: 6,
    title: "Remote Team Culture: Lessons from 50 Distributed Companies",
    description:
      "What separates thriving remote teams from struggling ones? We surveyed 50 distributed companies across 20 countries and distilled the common practices around async communication, rituals, documentation and psychological safety.",
    category: "Culture",
    image: "https://picsum.photos/seed/blog6/800/480",
    rating: { rate: 4.4, count: 134 },
  },
];

export const POPULAR_POSTS: IPopularPost[] = [
  {
    id: 1,
    img: "https://picsum.photos/seed/pop1/120/90",
    date: "14 March 2024",
    title: "AI Reshaping Business Intelligence",
  },
  {
    id: 2,
    img: "https://picsum.photos/seed/pop2/120/90",
    date: "09 March 2024",
    title: "Ultimate Guide to Data Visualisation",
  },
  {
    id: 3,
    img: "https://picsum.photos/seed/pop3/120/90",
    date: "02 March 2024",
    title: "Scalable SaaS Architecture from Scratch",
  },
  {
    id: 4,
    img: "https://picsum.photos/seed/pop4/120/90",
    date: "24 February 2024",
    title: "Product-Led Growth That Actually Works",
  },
];

export const TEAM_CARDS: ICardTeam[] = [
  {
    id: 1,
    img: "https://picsum.photos/seed/team1/200/200",
    imgBig: "https://picsum.photos/seed/team1/600/600",
    name: { firstname: "James", lastname: "Whitfield" },
    email: "j.whitfield@ensome.co",
    job: "Chief Executive Officer",
    phone: 16012015580,
    description:
      "James leads Ensome with over 15 years of experience in enterprise software and data strategy. He is passionate about empowering teams through transparent decision-making and cutting-edge analytics tools.",
  },
  {
    id: 2,
    img: "https://picsum.photos/seed/team2/200/200",
    imgBig: "https://picsum.photos/seed/team2/600/600",
    name: { firstname: "Sophia", lastname: "Laurent" },
    email: "s.laurent@ensome.co",
    job: "Head of Product",
    phone: 16012015581,
    description:
      "Sophia drives product vision and roadmap at Ensome. With a background in cognitive psychology and human-computer interaction, she ensures every feature is intuitive, delightful and aligned with customer needs.",
  },
  {
    id: 3,
    img: "https://picsum.photos/seed/team3/200/200",
    imgBig: "https://picsum.photos/seed/team3/600/600",
    name: { firstname: "Marcus", lastname: "Chen" },
    email: "m.chen@ensome.co",
    job: "Lead Engineer",
    phone: 16012015582,
    description:
      "Marcus architects the technical backbone of the Ensome platform. He specialises in distributed systems, real-time data pipelines and high-availability cloud infrastructure.",
  },
  {
    id: 4,
    img: "https://picsum.photos/seed/team4/200/200",
    imgBig: "https://picsum.photos/seed/team4/600/600",
    name: { firstname: "Olivia", lastname: "Reeves" },
    email: "o.reeves@ensome.co",
    job: "Design Director",
    phone: 16012015583,
    description:
      "Olivia leads brand identity and user experience across all Ensome products. She believes that great design is invisible — it simply makes things work in the most natural way possible.",
  },
  {
    id: 5,
    img: "https://picsum.photos/seed/team5/200/200",
    imgBig: "https://picsum.photos/seed/team5/600/600",
    name: { firstname: "Daniel", lastname: "Park" },
    email: "d.park@ensome.co",
    job: "Data Scientist",
    phone: 16012015584,
    description:
      "Daniel builds the models and algorithms that power Ensome's intelligent recommendations. His research background spans machine learning, time-series forecasting and causal inference.",
  },
  {
    id: 6,
    img: "https://picsum.photos/seed/team6/200/200",
    imgBig: "https://picsum.photos/seed/team6/600/600",
    name: { firstname: "Amara", lastname: "Osei" },
    email: "a.osei@ensome.co",
    job: "Customer Success Lead",
    phone: 16012015585,
    description:
      "Amara ensures that every Ensome customer achieves measurable value. She works closely with enterprise accounts to tailor onboarding, training and strategic quarterly reviews.",
  },
];

export const COMMENTS: TComment[] = [
  {
    photo1: "https://picsum.photos/seed/rev1/80/80",
    name: "Sarah Mitchell",
    proff1: "VP of Operations, Vertix Corp",
    photo2: "https://picsum.photos/seed/rev2/80/80",
    proff2: "CTO, NovaBridge Inc",
    text: "Ensome transformed how our leadership team consumes data. Instead of waiting for weekly reports, we now have live dashboards that surface insights instantly. It changed the culture of our entire organisation.",
  },
  {
    photo1: "https://picsum.photos/seed/rev3/80/80",
    name: "Michael Torres",
    proff1: "Head of Analytics, Lumio Health",
    photo2: "https://picsum.photos/seed/rev4/80/80",
    proff2: "Director of Growth, Stackflow",
    text: "We evaluated six platforms before choosing Ensome. The combination of ease of use, depth of customisation and genuinely responsive support team made the decision clear. We went live in under a week.",
  },
  {
    photo1: "https://picsum.photos/seed/rev5/80/80",
    name: "Elena Voronova",
    proff1: "Chief Data Officer, Qantex",
    photo2: "https://picsum.photos/seed/rev6/80/80",
    proff2: "Product Manager, Aerocube SaaS",
    text: "The onboarding experience was exceptional. Our team — many of whom are not technical — were building their own reports within days. Ensome strikes the perfect balance between power and simplicity.",
  },
];
