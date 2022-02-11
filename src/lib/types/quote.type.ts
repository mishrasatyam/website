export type Quote = {
  text: string;
  author: string;
  jobTitle: string;
  link?: string;
  companyLogo: {
    src: string;
    alt: string;
  };
  img: {
    src: string;
    alt: string;
  };
};
