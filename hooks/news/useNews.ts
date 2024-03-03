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
  
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const data: News[] = []
      const promises: Promise<any>[] = [];

      for (let i = 0; i < 3; i++) { // since the free plan only allows 3 articles per request, loop 3 times to get 9 articles
        const params = new URLSearchParams({
          categories: category,
          language: "en",
          page: (i+1).toString(),
        })
        const response = fetch(`https://api.thenewsapi.com/v1/news/all?${params.toString()}&api_token=${process.env.NEXT_PUBLIC_THE_NEWS_API_KEY}`);
        promises.push(response);
      }

      const responses = await Promise.all(promises); // use promise.all to optimize the fetching of the articles
      const parsed = await Promise.all(responses.map((response) => response.json()));
      parsed.forEach((response) => {
        data.push(...response.data.map((article: any) => ({
          title: article.title,
          description: article.description,
          url: article.url,
          author: article.source,
          publishedAt: new Date(article.published_at).toLocaleDateString(),
        })))
      })
        

      setNews(data)
      setLoading(false);
    };
    
      fetchNews();

  }, [category]);

  return [news, loading] as [News[], boolean];
}

export default useNews;