type Author = {
  name: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  slug: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
