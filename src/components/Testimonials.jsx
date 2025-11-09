import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The new site is fast, elegant, and finally converts. Our leads doubled in the first month.',
    name: 'Ava Thompson',
    role: 'Founder, Northside Studio',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'They made complex decisions simple. Clean UX, clear CTAs, and a brand feel we love.',
    name: 'Marcus Chen',
    role: 'COO, Lattice & Co.',
    avatar:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'Our performance scores went from average to 95+. The site simply feels premium now.',
    name: 'Priya Singh',
    role: 'Marketing Lead, Clover',
    avatar:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What clients say</h2>
          <p className="mt-2 text-slate-600">Social proof that builds confidence and reduces decision friction.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-1 text-teal-600">
                <Star className="h-4 w-4 fill-teal-600" />
                <Star className="h-4 w-4 fill-teal-600" />
                <Star className="h-4 w-4 fill-teal-600" />
                <Star className="h-4 w-4 fill-teal-600" />
                <Star className="h-4 w-4 fill-teal-600" />
              </div>
              <blockquote className="mt-4 text-slate-700 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
