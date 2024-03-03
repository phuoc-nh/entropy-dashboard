import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { News } from '@/hooks/news/useNews'
import { ExternalLink } from 'lucide-react'
import React from 'react'

export default function NewsCard({
  title,
  description,
  url,
  author,
  publishedAt,
}: News) {

  const goToArticle = () => {
    window.open(url, '_blank')
  }

  return (
    <Card className='mb-4'>
      <CardHeader>
        <CardTitle>
          {title}
          <Button variant='ghost' onClick={goToArticle}>
            <ExternalLink className='w-30 h-30'></ExternalLink>
          </Button>
        </CardTitle>
        <CardDescription className='text-muted-foreground'>
          {author}, {publishedAt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      
  </Card>
  )
}
