export interface Article {
  id: number;
  author?: {
    name: string;
  };
  title: string;
  description: string;
  imgUrl?: string;
  publishedAt: string;
  content: string;
}
