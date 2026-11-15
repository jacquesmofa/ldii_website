/** LDII updates. The list is in src/content/news.json (editable in the website editors). */
import news from '../content/news.json';

export interface NewsArticle {
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
  link: string;
  linkLabel: string;
}

export const newsArticles = news.items as NewsArticle[];
