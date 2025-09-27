import { me } from '@/data/profile';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  return (
    <main className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Blog</h1>
        <div className="max-w-4xl mx-auto">
          {me.posts?.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {me.posts.map((post, index) => (
                <article key={index} className="card">
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    {post.link ? (
                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noreferrer noopener"
                        className="btn btn-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Read Publication
                      </a>
                    ) : (
                      <a 
                        href={`/blog/${post.slug}`}
                        className="btn"
                      >
                        <ArrowRight className="w-4 h-4" />
                        Read More
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="card text-center">
              <div className="text-neutral-600 dark:text-neutral-400 mb-2">
                No posts yet.
              </div>
              <p className="text-sm text-neutral-500">
                Check back soon for articles and insights!
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}