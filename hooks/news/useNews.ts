import { useEffect, useState } from "react";

export type News = {
  title: string
  description?: string
  url: string
  author?: string
  publishedAt: string
}

const useNews = (category: string) => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const params = new URLSearchParams({
    category,
    pageSize: "10",
    language: "en",
  })

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const response = await fetch(`https://newsapi.org/v2/top-headlines?${params.toString()}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);
      const data = await response.json();
      if (data.status !== "ok") throw new Error(data.message);
      setNews(data.articles.map((article: any) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        author: article.author,
        publishedAt: new Date(article.publishedAt).toLocaleDateString(),
      })))
      setLoading(false);
    };

    fetchNews();
  }, [category]);

  return [news, loading] as [News[], boolean];
}

export default useNews;