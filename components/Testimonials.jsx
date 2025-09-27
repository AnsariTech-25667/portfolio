import { me } from '@/data/profile';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  if (!me.testimonials || me.testimonials.length === 0) {
    return null; // Conditional rendering
  }

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Testimonials</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {me.testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="mb-4">
                  <Quote className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                  <div className="text-sm text-neutral-500">{testimonial.company}</div>
                  {testimonial.rating && (
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}