module.exports=[70864,a=>{a.n(a.i(33290))},23659,a=>{a.n(a.i(26859))},98441,a=>{a.n(a.i(15757))},51557,a=>{a.n(a.i(69338))},53554,a=>{a.n(a.i(96382))},80943,a=>{"use strict";let b=[{id:"building-scalable-react-applications",title:"Building Scalable React Applications",excerpt:"Learn best practices for structuring large-scale React applications with clean architecture and performance optimization.",date:"2024-03-15",category:"Development",readTime:"8 min read",content:`
            # How I Built Slyderz: A Food Truck Marketplace Platform

            ## The Vision

            Slyderz is a food truck marketplace platform that connects hungry customers with local food trucks. The idea was simple: create an online platform where people can discover food trucks near them, order ahead to skip the line, and support local businesses. For truck owners, we wanted to provide a simple way to get discovered, manage orders, and keep more of their revenue (we only take 10%).

            ## Architecture Overview

            I decided to build Slyderz as a monorepo using modern web technologies. The platform consists of multiple applications and shared packages, all managed with Turborepo and PNPM workspaces.

            ### Applications

            - **Consumer App** - Customer-facing web app for discovering and ordering from food trucks
            - **Dashboard** - Admin dashboard for food truck owners to manage their business
            - **Server** - Backend API handling business logic and data management
            - **Blog** - Content management platform for food truck industry insights

            ### Shared Packages

            - **UI** - Shared React component library using Tailwind CSS and shadcn/ui
            - **Database** - Database utilities and schema using Drizzle ORM
            - **ORPC** - Type-safe API communication layer
            - **Email** - Transactional email templates using React Email
            - **Tasks** - Background jobs and workflow automation
            - **Config** - Shared configuration utilities

            ## Tech Stack Choices

            ### Frontend: Next.js 16 with App Router
            I chose Next.js for its excellent developer experience, built-in optimizations, and the new App Router which provides better control over layouts and data fetching.

            \`\`\`typescript
            // Example of a food truck listing page
            export default async function TruckPage({ params }: { params: { id: string } }) {
              const truck = await orpc.trucks.getById(params.id);

              return (
                <div className="min-h-screen bg-background">
                  <TruckHeader truck={truck} />
                  <MenuSection menu={truck.menu} />
                  <OrderSection truckId={truck.id} />
                </div>
              );
            }
            \`\`\`

            ### Backend: Elysia with TypeScript
            For the API server, I used Elysia - a modern TypeScript-first web framework. It's incredibly fast and provides excellent type safety.

            \`\`\`typescript
            const app = new Elysia()
              .use(cors({
                origin: [CONSUMER_SITE_URL, DASHBOARD_SITE_URL],
                credentials: true,
              }))
              .all("/rpc*", async (context) => {
                const { response } = await rpcHandler.handle(context.request, {
                  prefix: "/rpc",
                  context: { headers: context.request.headers },
                });
                return response ?? new Response("Not Found", { status: 404 });
              });
              \`\`\`

            ### Database: PostgreSQL with Drizzle ORM
            PostgreSQL was the obvious choice for reliability and features. Drizzle ORM provides type-safe database operations with excellent TypeScript support.

            \`\`\`typescript
            // Example schema definition
            export const trucks = pgTable('trucks', {
              id: serial('id').primaryKey(),
              name: text('name').notNull(),
              cuisine: text('cuisine').notNull(),
              location: point('location').notNull(),
              ownerId: integer('owner_id').references(() => users.id),
              isActive: boolean('is_active').default(true),
            });
            \`\`\`

            ### Authentication: Better Auth
            I implemented authentication using Better Auth, which provides a secure and flexible authentication system with support for multiple providers.

            \`\`\`typescript
            export const auth = betterAuth({
              database: {
                provider: 'postgresql',
                url: process.env.DATABASE_URL!,
              },
              emailAndPassword: {
                enabled: true,
                requireEmailVerification: true,
              },
              socialProviders: {
                google: {
                  clientId: process.env.GOOGLE_CLIENT_ID!,
                  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
                },
              },
            });
            \`\`\`

            ## Key Features Implementation

            ### Real-time Location Tracking
            One of the core features is real-time food truck location tracking. I implemented this using a combination of geolocation APIs and WebSocket connections.

            \`\`\`typescript
            // Location context for real-time updates
            export function LocationProvider({ children }: { children: React.ReactNode }) {
              const [location, setLocation] = useState<GeolocationPosition | null>(null);

              useEffect(() => {
                const watchId = navigator.geolocation.watchPosition(
                  (position) => setLocation(position),
                  (error) => console.error('Location error:', error),
                  { enableHighAccuracy: true }
                );

                return () => navigator.geolocation.clearWatch(watchId);
              }, []);

              return (
                <LocationContext.Provider value={location}>
                  {children}
                </LocationContext.Provider>
              );
            }
            \`\`\`

            ### Online Ordering System
            The ordering system was built with a focus on simplicity and reliability. I used a combination of client-side state management and server-side validation.

            \`\`\`typescript
            // Cart context for managing orders
            export function CartProvider({ children }: { children: React.ReactNode }) {
              const [items, setItems] = useState<CartItem[]>([]);
              const [isCheckout, setIsCheckout] = useState(false);

              const addItem = (item: MenuItem) => {
                setItems(prev => [...prev, { ...item, quantity: 1 }]);
              };

              const removeItem = (itemId: string) => {
                setItems(prev => prev.filter(item => item.id !== itemId));
              };

              const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

              return (
                <CartContext.Provider value={{ items, addItem, removeItem, total, isCheckout, setIsCheckout }}>
                  {children}
                </CartContext.Provider>
              );
            }
            \`\`\`

            ### Payment Processing with Stripe
            I integrated Stripe for payment processing, ensuring secure and reliable transactions for both customers and truck owners.

            \`\`\`typescript
            // Payment intent creation
            export async function createPaymentIntent(amount: number, truckId: string) {
              const paymentIntent = await stripe.paymentIntents.create({
                amount: amount * 100, // Convert to cents
                currency: 'usd',
                metadata: { truckId },
                automatic_payment_methods: { enabled: true },
              });

              return paymentIntent;
            }
            \`\`\`

            ## Development Workflow

            ### Monorepo Management
            Using Turborepo has been a game-changer for managing the complex codebase. It provides intelligent caching and parallel execution of tasks.

            \`\`\`json
            {
              "tasks": {
                "build": {
                  "dependsOn": ["^build"],
                  "inputs": ["$TURBO_DEFAULT$", ".env*"],
                  "outputs": [".next/**", "!.next/cache/**", "dist/**"]
                },
                "dev": {
                  "cache": false,
                  "persistent": true
                }
              }
            }
            \`\`\`

            ### Type-Safe API Communication
            I implemented a custom RPC layer using ORPC to ensure type-safe communication between frontend and backend.

            \`\`\`typescript
            // API router definition
            export const router = {
              trucks: {
                getById: procedure.input(z.string()).query(async ({ input }) => {
                  return await db.query.trucks.findFirst({
                    where: eq(trucks.id, parseInt(input)),
                    with: { menu: true, owner: true }
                  });
                }),
                getNearby: procedure.input(z.object({
                  lat: z.number(),
                  lng: z.number(),
                  radius: z.number().default(5)
                })).query(async ({ input }) => {
                  // Geospatial query implementation
                })
              }
            };
            \`\`\`

            ## Deployment and Infrastructure

            ### Environment Configuration
            I set up separate environments for development, staging, and production with proper configuration management.

            \`\`\`typescript
            // Config management
            export const config = {
              database: {
                url: process.env.DATABASE_URL!,
                ssl: process.env.NODE_ENV === 'production'
              },
              auth: {
                secret: process.env.BETTER_AUTH_SECRET!,
                url: process.env.BETTER_AUTH_URL!
              },
              stripe: {
                secretKey: process.env.STRIPE_SECRET_KEY!,
                webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!
              }
            };
            \`\`\`

            ### Background Jobs
            For handling background tasks like email notifications and order processing, I used Trigger.dev.

            \`\`\`typescript
            // Background job for order confirmation
            export const orderConfirmationJob = job({
              id: 'order-confirmation',
              trigger: eventTrigger({
                name: 'order.created',
                schema: z.object({
                  orderId: z.string(),
                  customerId: z.string(),
                  truckId: z.string()
                })
              }),
              run: async ({ payload }) => {
                const order = await getOrderById(payload.orderId);
                await sendOrderConfirmationEmail(order);
                await notifyTruckOwner(payload.truckId, order);
              }
            });
            \`\`\`

            ## Challenges and Solutions

            ### Real-time Updates
            Implementing real-time updates for truck locations and order status was challenging. I solved this by using a combination of server-sent events and optimistic UI updates.

            ### Geospatial Queries
            Efficiently querying nearby food trucks required careful database design. I implemented PostGIS extensions and optimized queries for performance.

            ### Payment Flow
            Creating a seamless payment flow that handles edge cases like partial payments and refunds required extensive testing and error handling.

            ## Performance Optimizations

            ### Image Optimization
            I implemented automatic image optimization using Next.js Image component and Cloudinary for serving optimized images.

            \`\`\`typescript
            <Image
              src={truck.imageUrl}
              alt={truck.name}
              width={400}
              height={300}
              className="rounded-lg object-cover"
              priority
            />
            \`\`\`

            ### Caching Strategy
            I implemented a multi-layer caching strategy using React Query for client-side caching and Redis for server-side caching.

            ### Code Splitting
            Proper code splitting and lazy loading ensured fast initial page loads while maintaining rich functionality.

            ## Future Plans

            The platform is continuously evolving. Some features I'm working on:

            - **Mobile Apps** - Native iOS and Android applications
            - **Advanced Analytics** - Detailed insights for truck owners
            - **Loyalty Program** - Customer rewards and retention features
            - **Expansion** - Launching in more cities beyond Atlanta

            ## Lessons Learned

            Building Slyderz taught me several valuable lessons:

            1. **Start Simple** - Begin with core features and iterate based on user feedback
            2. **Type Safety Matters** - Invest in proper TypeScript setup from the beginning
            3. **Monorepo Benefits** - The complexity pays off in maintainability and code sharing
            4. **User Experience** - Focus on making the ordering process as smooth as possible
            5. **Infrastructure Planning** - Design for scale from day one

            ## Get Started

            If you're interested in building similar platforms or want to contribute to Slyderz, check out the [GitHub repository](https://github.com/your-username/slyderz). The platform is currently launching in Atlanta with plans to expand to more cities.

            For food truck owners interested in joining the platform, visit [slyderz.com/truck-owners](https://slyderz.com/truck-owners) to learn more and sign up for early access.
    `},{id:"the-future-of-web-design-2024",title:"The Future of Web Design in 2024",excerpt:"Exploring emerging trends in web design, from minimalism to immersive experiences and everything in between.",date:"2024-03-10",category:"Design",readTime:"6 min read",content:`
# The Future of Web Design in 2024

Web design continues to evolve at a rapid pace. In this post, I'll explore the trends that are shaping how we design and build websites today.

## Minimalism with Purpose

The trend toward minimalism continues, but with a twist. It's no longer about stripping away elements for the sake of simplicity—it's about purposeful reduction.

> "Good design is as little design as possible." — Dieter Rams

Every element on the page should serve a purpose. This means:

- **Focused content hierarchy** - Guide users to what matters most
- **Intentional whitespace** - Give elements room to breathe
- **Reduced cognitive load** - Simplify decision-making for users

## Dark Mode as Default

More designers are starting with dark mode first, then adapting for light mode. This approach offers several benefits:

1. Reduced eye strain in low-light environments
2. Battery savings on OLED screens
3. A modern, sophisticated aesthetic

\`\`\`css
/* CSS custom properties for theme switching */
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  --accent: #f97316;
}

[data-theme="dark"] {
  --bg-primary: #0a0a0a;
  --text-primary: #fafafa;
  --accent: #f97316;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s, color 0.3s;
}
\`\`\`

## Micro-interactions

Subtle animations and micro-interactions are becoming essential for creating engaging user experiences. These small details make interfaces feel alive and responsive.

\`\`\`css
/* Subtle hover effect */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

/* Button press effect */
.button {
  transition: transform 0.1s ease;
}

.button:active {
  transform: scale(0.98);
}
\`\`\`

## Variable Fonts

Variable fonts are revolutionizing typography on the web. A single font file can contain multiple weights, widths, and styles:

\`\`\`css
/* Using a variable font */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-variation-settings: 'wght' 700, 'slnt' 0;
}

/* Animate font weight on hover */
.animated-text {
  transition: font-variation-settings 0.3s ease;
}

.animated-text:hover {
  font-variation-settings: 'wght' 900;
}
\`\`\`

## Bento Grid Layouts

Inspired by Japanese bento boxes, this layout trend uses asymmetric grids to create visually interesting and organized content arrangements:

\`\`\`css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 1rem;
}

.bento-item:nth-child(1) {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-item:nth-child(2) {
  grid-column: span 2;
}

.bento-item:nth-child(3) {
  grid-row: span 2;
}
\`\`\`

## Conclusion

The future of web design is about creating meaningful experiences through intentional choices. Whether it's embracing dark mode, adding subtle micro-interactions, or experimenting with bento grids, the key is to always keep the user at the center of your design decisions.
    `},{id:"getting-started-with-nextjs-15",title:"Getting Started with Next.js 15",excerpt:"A comprehensive guide to the latest features in Next.js 15 and how to leverage them in your projects.",date:"2024-03-05",category:"Tutorial",readTime:"10 min read",content:`
# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements. Let's explore how to get started and make the most of this powerful framework.

## Installation

Create a new Next.js 15 project with the following command:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

You'll be prompted to configure your project. Here are my recommended settings:

\`\`\`
✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like to use the src/ directory? No
✔ Would you like to use App Router? Yes
✔ Would you like to customize the default import alias? No
\`\`\`

## Server Components

Server Components are the default in the App Router. They allow you to render components on the server, reducing the JavaScript sent to the client:

\`\`\`tsx
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
\`\`\`

## Client Components

When you need interactivity, use the \`'use client'\` directive:

\`\`\`tsx
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
\`\`\`

## Server Actions

Server Actions allow you to define server-side functions that can be called directly from your components:

\`\`\`tsx
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
\`\`\`

\`\`\`tsx
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
\`\`\`

## Parallel Routes

Parallel routes allow you to render multiple pages simultaneously in the same layout:

\`\`\`
app/
├── layout.tsx
├── page.tsx
├── @analytics/
│   └── page.tsx
└── @team/
    └── page.tsx
\`\`\`

\`\`\`tsx
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
\`\`\`

## Route Handlers

Create API endpoints using Route Handlers:

\`\`\`typescript
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
\`\`\`

## Metadata API

Define metadata for SEO directly in your pages:

\`\`\`tsx
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
\`\`\`

## Conclusion

Next.js 15 provides a powerful foundation for building modern web applications. With Server Components, Server Actions, and the improved App Router, you have all the tools you need to create fast, scalable applications.

Start experimenting with these features in your next project!
    `}];function c(a){return b.find(b=>b.id===a)}a.s(["blogPosts",0,b,"getBlogPost",()=>c])},28962,a=>{"use strict";let b=(0,a.i(68476).default)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);a.s(["Calendar",()=>b],28962)},20889,a=>{"use strict";let b=(0,a.i(18134).registerClientReference)(function(){throw Error("Attempted to call MarkdownRenderer() from the server but MarkdownRenderer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/markdown-renderer.tsx <module evaluation>","MarkdownRenderer");a.s(["MarkdownRenderer",0,b])},28076,a=>{"use strict";let b=(0,a.i(18134).registerClientReference)(function(){throw Error("Attempted to call MarkdownRenderer() from the server but MarkdownRenderer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/markdown-renderer.tsx","MarkdownRenderer");a.s(["MarkdownRenderer",0,b])},8556,a=>{"use strict";a.i(20889);var b=a.i(28076);a.n(b)},37851,a=>{"use strict";var b=a.i(55008),c=a.i(80943),d=a.i(8556),e=a.i(40088),f=a.i(28962);let g=(0,a.i(68476).default)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);var h=a.i(45548),i=a.i(24290);a.i(93603);var j=a.i(45893);async function k(){return c.blogPosts.map(a=>({id:a.id}))}async function l({params:a}){let{id:b}=await a,d=(0,c.getBlogPost)(b);return d?{title:`${d.title} | Blog`,description:d.excerpt}:{title:"Post Not Found"}}async function m({params:a}){let{id:k}=await a,l=(0,c.getBlogPost)(k);return l||(0,j.notFound)(),(0,b.jsx)("main",{className:"min-h-screen bg-background py-12",children:(0,b.jsxs)("article",{className:"container mx-auto max-w-3xl px-4",children:[(0,b.jsxs)(i.default,{href:"/#blog",className:"mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent",children:[(0,b.jsx)(h.ArrowLeft,{className:"h-4 w-4"}),"Back to all posts"]}),(0,b.jsxs)("header",{className:"mb-12",children:[(0,b.jsx)(e.Badge,{variant:"secondary",className:"mb-4",children:l.category}),(0,b.jsx)("h1",{className:"mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl",children:l.title}),(0,b.jsxs)("div",{className:"flex flex-wrap items-center gap-4 text-muted-foreground",children:[(0,b.jsxs)("div",{className:"flex items-center gap-2",children:[(0,b.jsx)(f.Calendar,{className:"h-4 w-4"}),(0,b.jsx)("time",{dateTime:l.date,children:new Date(l.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]}),(0,b.jsxs)("div",{className:"flex items-center gap-2",children:[(0,b.jsx)(g,{className:"h-4 w-4"}),(0,b.jsx)("span",{children:l.readTime})]})]})]}),(0,b.jsx)(d.MarkdownRenderer,{content:l.content}),(0,b.jsx)("footer",{className:"mt-16 border-t pt-8",children:(0,b.jsxs)(i.default,{href:"/#blog",className:"inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent",children:[(0,b.jsx)(h.ArrowLeft,{className:"h-4 w-4"}),"Back to all posts"]})})]})})}a.s(["default",()=>m,"generateMetadata",()=>l,"generateStaticParams",()=>k],37851)}];

//# sourceMappingURL=_f69d7d9b._.js.map