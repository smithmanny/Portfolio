1:"$Sreact.fragment"
2:I[10641,["/_next/static/chunks/c3f31ae7688b1ab0.js","/_next/static/chunks/edcd7406ddf270d0.js"],""]
3:I[51833,["/_next/static/chunks/c3f31ae7688b1ab0.js","/_next/static/chunks/edcd7406ddf270d0.js"],"MarkdownRenderer"]
8:I[89836,["/_next/static/chunks/3337476739009024.js","/_next/static/chunks/796e7f5bb07ad38d.js"],"OutletBoundary"]
9:"$Sreact.suspense"
4:T10fe,
# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements. Let's explore how to get started and make the most of this powerful framework.

## Installation

Create a new Next.js 15 project with the following command:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

You'll be prompted to configure your project. Here are my recommended settings:

```
✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like to use the src/ directory? No
✔ Would you like to use App Router? Yes
✔ Would you like to customize the default import alias? No
```

## Server Components

Server Components are the default in the App Router. They allow you to render components on the server, reducing the JavaScript sent to the client:

```tsx
// app/users/page.tsx
// This is a Server Component by default

async function getUsers() {
  const res = await fetch('https://api.example.com/users', {
    cache: 'no-store' // or use revalidate
  })
  return res.json()
}

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: { id: string; name: string }) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
```

## Client Components

When you need interactivity, use the `'use client'` directive:

```tsx
'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

## Server Actions

Server Actions allow you to define server-side functions that can be called directly from your components:

```tsx
// app/actions.ts
'use server'

import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  await db.post.create({
    data: { title, content }
  })

  revalidatePath('/posts')
}
```

```tsx
// app/posts/new/page.tsx
import { createPost } from '@/app/actions'

export default function NewPostPage() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Title" required />
      <textarea name="content" placeholder="Content" required />
      <button type="submit">Create Post</button>
    </form>
  )
}
```

## Parallel Routes

Parallel routes allow you to render multiple pages simultaneously in the same layout:

```
app/
├── layout.tsx
├── page.tsx
├── @analytics/
│   └── page.tsx
└── @team/
    └── page.tsx
```

```tsx
// app/layout.tsx
export default function Layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <div>
      {children}
      <div className="grid grid-cols-2 gap-4">
        {analytics}
        {team}
      </div>
    </div>
  )
}
```

## Route Handlers

Create API endpoints using Route Handlers:

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const users = await db.user.findMany()
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()

  const user = await db.user.create({
    data: body
  })

  return NextResponse.json(user, { status: 201 })
}
```

## Metadata API

Define metadata for SEO directly in your pages:

```tsx
// app/about/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our company and team.',
  openGraph: {
    title: 'About Us',
    description: 'Learn more about our company and team.',
    images: ['/og-about.png'],
  },
}

export default function AboutPage() {
  return <h1>About Us</h1>
}
```

## Conclusion

Next.js 15 provides a powerful foundation for building modern web applications. With Server Components, Server Actions, and the improved App Router, you have all the tools you need to create fast, scalable applications.

Start experimenting with these features in your next project!
    0:{"buildId":"G9NOHVyiU00zQP41eQuPa","rsc":["$","$1","c",{"children":[["$","main",null,{"className":"min-h-screen bg-background py-12","children":["$","article",null,{"className":"container mx-auto max-w-3xl px-4","children":[["$","$L2",null,{"href":"/#blog","className":"mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent","children":[["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-left h-4 w-4","children":[["$","path","1l729n",{"d":"m12 19-7-7 7-7"}],["$","path","x3x0zl",{"d":"M19 12H5"}],"$undefined"]}],"Back to all posts"]}],["$","header",null,{"className":"mb-12","children":[["$","span",null,{"data-slot":"badge","className":"inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 mb-4","children":"Tutorial"}],["$","h1",null,{"className":"mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl","children":"Getting Started with Next.js 15"}],["$","div",null,{"className":"flex flex-wrap items-center gap-4 text-muted-foreground","children":[["$","div",null,{"className":"flex items-center gap-2","children":[["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-calendar h-4 w-4","children":[["$","path","1cmpym",{"d":"M8 2v4"}],["$","path","4m81vk",{"d":"M16 2v4"}],["$","rect","1hopcy",{"width":"18","height":"18","x":"3","y":"4","rx":"2"}],["$","path","8toen8",{"d":"M3 10h18"}],"$undefined"]}],["$","time",null,{"dateTime":"2024-03-05","children":"March 4, 2024"}]]}],["$","div",null,{"className":"flex items-center gap-2","children":[["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-clock h-4 w-4","children":[["$","circle","1mglay",{"cx":"12","cy":"12","r":"10"}],["$","polyline","68esgv",{"points":"12 6 12 12 16 14"}],"$undefined"]}],["$","span",null,{"children":"10 min read"}]]}]]}]]}],["$","$L3",null,{"content":"$4"}],"$L5"]}]}],["$L6"],"$L7"]}],"loading":null,"isPartial":false}
5:["$","footer",null,{"className":"mt-16 border-t pt-8","children":["$","$L2",null,{"href":"/#blog","className":"inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent","children":[["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-left h-4 w-4","children":[["$","path","1l729n",{"d":"m12 19-7-7 7-7"}],["$","path","x3x0zl",{"d":"M19 12H5"}],"$undefined"]}],"Back to all posts"]}]}]
6:["$","script","script-0",{"src":"/_next/static/chunks/edcd7406ddf270d0.js","async":true}]
7:["$","$L8",null,{"children":["$","$9",null,{"name":"Next.MetadataOutlet","children":"$@a"}]}]
a:null
