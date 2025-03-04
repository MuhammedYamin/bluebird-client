import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    slug: "best-ui-components",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    slug: "improve-design-skills",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    slug: "coding-speed-tips",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "Top 5 Things to Consider Before Buying a New Home",
    slug: "home-buying-tips",
    paragraph: "Purchasing a new home is a major investment. Here are five key factors to consider before making your decision.",
    image: "/images/blog/real-estate-01.jpg",
    author: {
      name: "John Doe",
      image: "/images/blog/author-04.png",
      designation: "Real Estate Expert",
    },
    tags: ["real estate", "home buying"],
    publishDate: "2025",
  },
];
export default blogData;
