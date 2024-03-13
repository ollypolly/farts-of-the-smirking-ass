# Farts of the Smirking Ass

## Project Overview

[Blog](https://nextjs-blog.sanity.build)
Main Blog site
[Studio](https://nextjs-blog.sanity.build/studio)
Sanity backend CMS web interface for authoring content

### Important files and folders

| File(s)                                     | Description                                              |
| ------------------------------------------- | -------------------------------------------------------- |
| `sanity.config.ts`                          |  Config file for Sanity Studio                           |
| `sanity.cli.ts`                             |  Config file for Sanity CLI                              |
| `/pages/studio/[[...index]].tsx`            |  Where Sanity Studio is mounted                          |
| `/pages/api/revalidate.ts`                  |  Serverless route for triggering ISR                     |
| `/pages/api/draft.ts`                       |  Serverless route for triggering Draft mode              |
| `/schemas`                                  |  Where Sanity Studio gets its content types from         |
| `/plugins`                                  |  Where the advanced Sanity Studio customization is setup |
| `/lib/sanity.api.ts`,`/lib/sanity.image.ts` | Configuration for the Sanity Content Lake client         |
| `/components/PreviewProvider.tsx`           | Configuration for the live Preview Mode                  |

## Configuration

### Step 3. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

To run dev you must have at least node 18.17.0 installed. If you don't have it installed, you can use [nvm](https://github.com/nvm-sh/nvm) to install it.

```bash
nvm install 18.17.0
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your blog should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].
