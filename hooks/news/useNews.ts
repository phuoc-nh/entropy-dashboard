import { useEffect, useState } from "react";

// export type News = {
//   title: string
//   description?: string
//   url: string
//   author?: string
//   publishedAt: string
// }
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
    language: "en",
  })

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const response = await fetch(`https://api.thenewsapi.com/v1/news/all?${params.toString()}&api_token=${process.env.NEXT_PUBLIC_THE_NEWS_API_KEY}`);
      const data = await response.json();
      // if (data.status !== "ok") throw new Error(data.message);
      console.log({data})
      setNews([
        ...news,
        ...data.data.map((article: any) => ({
          title: article.title,
          description: article.description,
          url: article.url,
          author: article.source,
          publishedAt: new Date(article.published_at).toLocaleDateString(),
        }))
      ])
      
      setLoading(false);
    };

    fetchNews();
  }, [category]);

  return [news, loading] as [News[], boolean];
}

export default useNews;