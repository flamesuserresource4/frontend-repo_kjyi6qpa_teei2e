import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-white">
      {/* Top navigation inside hero for clear CTA visibility */}
      <header className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-teal-500/15 ring-1 ring-teal-500/30 flex items-center justify-center">
            <Rocket className="h-4 w-4 text-teal-600" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">Your Business/Project Name</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition">Services</a>
          <a href="#work" className="hover:text-slate-900 transition">Portfolio</a>
          <a href="#blog" className="hover:text-slate-900 transition">Blog</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          <a href="#cta" className="ml-2 inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-teal-700 transition">
            Book a Free Consultation
          </a>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200 mb-4">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              Clean, modern, and conversion-focused
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-slate-900">
              Unlock Your Business Potential with Strategic Design
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Clean, performance-driven websites built for growth and conversion. Minimalist layouts, thoughtful typography, and a clear user journey.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3" id="cta">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow-sm hover:bg-slate-800 transition">
                <Rocket className="h-4 w-4" />
                Book a Free Consultation
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 transition">
                Learn More
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop" alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" />
                <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" />
              </div>
              <span>Trusted by founders and small teams</span>
            </div>
          </div>

          {/* 3D Spline Scene */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden ring-1 ring-slate-200/70">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle gradient overlay to blend with page background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/60" />
          </div>
        </div>

        {/* Mini contact strip for fast access on mobile */}
        <div className="mt-8 md:hidden">
          <a href="#contact" className="flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-3 text-white shadow-sm hover:bg-teal-700 transition">
            <Mail className="h-4 w-4" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
