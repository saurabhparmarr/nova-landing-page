
import { ArrowUp, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="border-t border-slate-800 bg-slate-950 px-6 py-16 text-slate-300 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 text-white"
              aria-label="NOVA Home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950">
                N
              </span>
              <span className="text-lg font-bold tracking-tight">NOVA</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              AI-powered tools that help modern teams work smarter, move
              faster, and achieve more.
            </p>

            <div className="mt-6 flex items-center">
              <a
                href="mailto:hello@nova.com"
                aria-label="Email NOVA"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
              >
                <Mail size={15} aria-hidden="true" />
                hello@nova.com
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-sm font-bold text-white">Product</h4>

            <a
              href="#features"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Features
            </a>

            <a
              href="#solutions"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Solutions
            </a>

            <a
              href="#pricing"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Pricing
            </a>

            <a
              href="#how-it-works"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              How It Works
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-sm font-bold text-white">Company</h4>

            <a
              href="#about"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#testimonials"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Customers
            </a>

            <a
              href="#faq"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              FAQ
            </a>

            <a
              href="mailto:hello@nova.com"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-sm font-bold text-white">Resources</h4>

            <a
              href="#features"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Product Overview
            </a>

            <a
              href="#faq"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Help & FAQ
            </a>

            <a
              href="#solutions"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Use Cases
            </a>

            <a
              href="mailto:support@nova.com"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Support
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-6 border-t border-slate-800 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © 2026 NOVA. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <span className="text-xs text-slate-500">
              Fictional brand for assignment
            </span>

            <a
              href="#faq"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              FAQ
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <ArrowUp size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

