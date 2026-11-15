/** LDII updates. The list is in src/content/news.json (editable in the website editors). */
import newsRaw from '../content/news.json';
import { normalize } from '../content/normalize';

const news = normalize(newsRaw);

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
