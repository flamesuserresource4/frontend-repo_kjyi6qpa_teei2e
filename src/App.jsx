import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Features />
      <section id="work" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Selected work</h2>
            <p className="mt-2 text-slate-600">Large, clean visuals that put the focus on outcomes.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <img
                  src={`https://images.unsplash.com/photo-1551281044-8d8d0d8d8d8d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=${i}`}
                  alt="Case study"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-medium text-slate-900">Project Title {i}</h3>
                  <p className="text-sm text-slate-600">Short description of the outcome and impact.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="blog" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Latest articles</h2>
            <p className="mt-2 text-slate-600">Clean layout for news and insights.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <article key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-medium text-slate-900">Post headline {i}</h3>
                <p className="mt-2 text-sm text-slate-600">A short summary that is easy to scan without jargon.</p>
                <a href="#" className="mt-4 inline-block text-teal-700 hover:text-teal-800 font-medium">Read more →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
