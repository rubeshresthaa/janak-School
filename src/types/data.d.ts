type Blog = {
  prop: {
    id:number;
    title: string;
    description: string;
    mainImage: string;
    author: string;
    publishedDate: string;
    content: {
      subContentTitle: string;
      image: string;
      subContent: string;
    }[];
  };
};


