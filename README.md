Assignment that get me into Entropy Techlonogy.
## Getting Started
- Create .env.local file to store secrets.
- Register [Open weather api](https://openweathermap.org) to retrieve weather api key then paste it into .env.local.
- Register [The news api](https://www.thenewsapi.com) to retrieve news api key then paste it into .env.local.

```bash
NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
NEXT_PUBLIC_THE_NEWS_API_KEY=NEXT_PUBLIC_THE_NEWS_API_KEY
```

Then, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Weather

- Current location is set default to Sydney, however it could be changed to other locations of choice.
- When location is incorrectly specified, the error would be catch and the UI just keeps the previous state.


## News

- [The news api](https://www.thenewsapi.com) is decided to use since it allows to call in production, however, it limits to 3 articles pre request and 100 articles per day on production.
- Each reload would retrieve 9 articles therefore after approximately 10 times reload, it would not be able to receive any news data.
- [The news api](https://www.thenewsapi.com) is great but it only allows to call from localhost. Production env would not be possible to get any data.
- Category could be addressed to filter articles.

## Task manager

- Refer to [this article](https://dev.to/collegewap/how-to-use-local-storage-in-nextjs-2l2j) to set up Local Storage in nextjs.
- Other parts are straight forward. It allows create, delete and mark completed tasks.
- Delete would require confirmation to proceed.

## Other
- Fully responsive.
- Secrets are store in .env file.
- Daily quote integration.

## Technology
- React, Tailwind: a powerful combo with strong and enormous community back.
- Shadcn UI: Extremely flexible library allows to customize built-in components.
- Nextjs: easy to deploy and rollback. 
