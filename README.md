This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
# Discord Bot Program for Prometheus 

Technologies involved:
Next.JS
Shadcn UI 
Clerkjs - For Auth
next-themes
# Backend
- Prisma
- PlanetScale

Upload thing

In Organizing Folders we have this Organizational Routes that ignores parent Path and goes directly to the sub Path in routes. This is denoted by `()` you can also add layouts on this which will affect styles in the folder  

when handling routes only change folder name not page name. page name should be in default page.tsx otherwise 404 not found


Powershell command for deleting a file  `Remove-Item -Recurse -Force {Path}`



we can move our main page to organizational folders/ or route folders  `({name})`



# Note: 
When handling api keys add to gitignore local .env file  

- Which u will have to create


# Clerk 
- clerk is the middleware that was used in this project. Mainly because of it simplicity. 
docs can be seen here for next.js 
https://clerk.com/docs/quickstarts/nextjs



# Prisma 
Installation `npm i -D primsa`
then run `npx prisma init`

- Note Everytime we have to modify our schema we have to run in terminal 
`npx prisma generate` --  this adds the schema to our node modules soo we can develop with it 
after this you have to push it  
`nps prisma db push`

after all that now we have to create a DB util in prisma  we will do it in our lib folder
`npm install @prisma/client` ps: you can install this in root 


