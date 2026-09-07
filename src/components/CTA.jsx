import { ArrowRight, Check, Sparkles, X } from "lucide-react";
import { useState } from "react";

const CTA = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [email, setEmail] = useState("");
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (event) => {
event.preventDefault();


if (!email.trim()) return;

setSubmitted(true);


};

const closeModal = () => {
setIsModalOpen(false);
setEmail("");
setSubmitted(false);
};

return (
<> <section
     id="cta"
     className="scroll-mt-20 px-6 py-20 lg:px-8 lg:py-28"
   > <div className="mx-auto max-w-7xl"> <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 text-center shadow-2xl sm:px-12 lg:px-20 lg:py-24">
{/* Background Glow */} <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" /> <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

```
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Badge */}
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <Sparkles size={15} aria-hidden="true" />
            Ready to work smarter?
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your team's next
            <span className="block text-slate-400">
              big move starts here.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Join thousands of teams using NOVA to automate work, unlock
            insights, and build what comes next.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Get Started for Free
            <ArrowRight size={18} aria-hidden="true" />
          </button>

          {/* Note */}
          <p className="mt-5 text-xs text-slate-500">
            No credit card required · Setup in minutes
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Get Started Modal */}
  {isModalOpen && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cta-modal-title"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close get started dialog"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <X size={18} aria-hidden="true" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Sparkles size={19} aria-hidden="true" />
              </div>

              <h3
                id="cta-modal-title"
                className="text-2xl font-bold tracking-tight text-slate-950"
              >
                Start with NOVA
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter your email and we'll help you get started with NOVA.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="cta-email"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Work email
                </label>

                <input
                  id="cta-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Continue
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-slate-400">
              Free forever on the Starter plan.
            </p>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-950">
              <Check size={26} aria-hidden="true" />
            </div>

            <h3
              id="cta-modal-title"
              className="mt-5 text-2xl font-bold tracking-tight text-slate-950"
            >
              You're on the list!
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Thanks for your interest in NOVA. We'll be in touch soon.
            </p>

            <button
              type="button"
              onClick={closeModal}
              className="mt-6 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )}
</>


);
};

export default CTA;
