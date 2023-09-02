export interface Article {
  author?: {
    name: string;
  };
  title: string;
  description: string;
  imgUrl?: string;
  publishedAt: string;
  content: string;
}
