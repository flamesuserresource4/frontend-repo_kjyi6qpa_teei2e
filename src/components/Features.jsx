import React from 'react';
import { CheckCircle2, Gauge, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Minimalist Aesthetic',
    desc: 'Whitespace-first layouts, refined typography, and clear visual hierarchy that elevate your brand.',
  },
  {
    icon: Gauge,
    title: 'Performance-Driven',
    desc: 'Optimized for speed and Core Web Vitals with clean code and modern tooling.',
  },
  {
    icon: Shield,
    title: 'Trust & Clarity',
    desc: 'Accessible design, consistent color system, and frictionless flows that build trust.',
  },
  {
    icon: CheckCircle2,
    title: 'Conversion Focused',
    desc: 'Thoughtful CTAs and UX patterns that guide visitors from interest to action.',
  },
];

const Features = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What you get</h2>
          <p className="mt-2 text-slate-600">A simple, modern site foundation designed to grow with your business.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition">
                <div className="h-10 w-10 rounded-lg bg-teal-500/10 text-teal-700 flex items-center justify-center ring-1 ring-teal-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-medium text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
