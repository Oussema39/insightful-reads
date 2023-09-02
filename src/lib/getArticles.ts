import { Article } from "@/interface/Article";
import { articles } from "@/utils/dammyArticles";

export const getArticles = (): Promise<Article[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(articles);
    }, 2000);
  });
};
