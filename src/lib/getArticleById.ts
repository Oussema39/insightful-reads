import { Article } from "@/interface/Article";
import { articles } from "@/utils/dummyArticles";

export const getArticleById = (
  articleId: number
): Promise<Article | undefined> => {
  return new Promise((res) => {
    setTimeout(() => {
      const article = articles.find(({ id }) => id === articleId);
      res(article);
    }, 2000);
  });
};
