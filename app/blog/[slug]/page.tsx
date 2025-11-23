import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter-form"
import { formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"
import { BLOG_POSTS } from "@/data/blog-posts"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((entry) => entry.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      <div className="w-full h-[400px] relative bg-black">
        <Image
          src={post.coverImage || "/placeholder.svg?height=600&width=1200&query=cybersecurity"}
          fill
          alt={post.title}
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6 -mt-20 relative z-10">
        <div className="max-w-3xl mx-auto bg-background rounded-lg shadow-lg p-6 md:p-10 border border-border">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{post.author}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>

          <div
            className="mt-8 prose prose-gray dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Stay updated with the latest cybersecurity insights and tips.
              </p>
            </div>
            <div className="w-full max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
