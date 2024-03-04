import React, { useEffect } from 'react'

export default function useQuote() {
  const [quote, setQuote] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)
  // use this api https://api.quotable.io/random

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true)
      const response = await fetch('https://api.quotable.io/random')
      const data = await response.json()
      setQuote(data.content)
      setLoading(false)
    }
    fetchQuote()
  },[])

  return [ quote, loading ]
  
}
