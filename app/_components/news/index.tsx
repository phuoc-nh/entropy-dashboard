import useNews from '@/hooks/news/useNews'
import React, { useState } from 'react'
import NewsCard from './NewsCard';
import { SelectCategory } from './SelectCategory';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Loading } from '@/components/ui/Loading';

export enum NewsCategory {
  Business = 'business',
  Entertainment = 'entertainment',
  General = 'general',
  Health = 'health',
  Science = 'science',
  Sports = 'sports',
  Technology = 'tech',
  Politics = 'politics',
  Food = 'food',
  Travel = 'travel',
}

export default function News() {
  const [category, setCategory] = useState(NewsCategory.General)
  const [news, loading] = useNews(category)

  const handleCategoryChange = (value: string) => {
    setCategory(value as NewsCategory)
  }

  if (loading) return (
    <Loading></Loading>
  )

  return (
    <Card className='p-4'>
      <div className=''>
        <SelectCategory value={category} onChange={handleCategoryChange}></SelectCategory>
      </div>
      
      <div className='mt-4'>
        {news.map((article, i) => {
          return (
            <NewsCard
              key={i}
              title={article.title}
              description={article.description}
              url={article.url}
              author={article.author}
              publishedAt={article.publishedAt}
            ></NewsCard>
          )
        })}
      </div>
      
 
    </Card>
  )
 
}
