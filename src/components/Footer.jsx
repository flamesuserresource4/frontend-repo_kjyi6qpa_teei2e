import React, { useState } from 'react';
import { Mail, Rocket } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-teal-500/15 ring-1 ring-teal-500/30 flex items-center justify-center">
                <Rocket className="h-4 w-4 text-teal-600" />
              </div>
              <span className="font-semibold tracking-tight text-slate-900">Your Business/Project Name</span>
            </a>
            <p className="mt-4 text-sm text-slate-600 max-w-sm">
              We build clean, high-performing websites that convert visitors into customers. Minimalist design, maximum clarity.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-slate-900">Quick links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#services" className="hover:text-slate-900">Services</a></li>
              <li><a href="#work" className="hover:text-slate-900">Portfolio</a></li>
              <li><a href="#blog" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-slate-900">Stay in the loop</h4>
            <p className="mt-2 text-sm text-slate-600">Join the newsletter for occasional insights on design and growth.</p>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-teal-700 transition"
              >
                <Mail className="h-4 w-4" />
                Subscribe
              </button>
            </form>
            {submitted && (
              <p className="mt-2 text-sm text-teal-700">Thanks! You'll hear from us soon.</p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Your Business/Project Name. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
