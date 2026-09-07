import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero = () => {
return ( <section
   id="home"
   className="relative scroll-mt-20 overflow-hidden bg-white px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36"
 >
{/* Background Glow */} <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" /> <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
    {/* Hero Content */}
    <div className="max-w-2xl">
      {/* Badge */}
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
        <Sparkles size={15} className="text-slate-950" />
        <span>AI-powered workspace for modern teams</span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
        Turn ideas into
        <span className="block text-slate-500">
          extraordinary results.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        NOVA brings your team, workflows, and intelligent automation
        together in one powerful platform built for faster growth.
      </p>

      {/* Actions */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <a
          href="#pricing"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl"
        >
          Get Started
          <ArrowRight size={18} />
        </a>

        <a
          href="#how-it-works"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50"
        >
          <Play size={16} fill="currentColor" />
          See How It Works
        </a>
      </div>

      {/* Trust Notes */}
      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
        <span>✓ No credit card required</span>
        <span>✓ Setup in minutes</span>
        <span>✓ Built for teams</span>
      </div>
    </div>

    {/* Dashboard Visual */}
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Dashboard */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-2xl shadow-slate-300/40 sm:p-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between rounded-t-2xl border-b border-slate-200 bg-white px-4 py-3 sm:px-5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>

          <div className="text-xs font-bold text-slate-600 sm:text-sm">
            NOVA Workspace
          </div>

          <div className="w-10" />
        </div>

        {/* Dashboard Body */}
        <div className="flex min-h-[390px] overflow-hidden rounded-b-2xl bg-white">
          {/* Sidebar */}
          <div className="hidden w-16 shrink-0 flex-col items-center gap-5 border-r border-slate-100 bg-slate-50 py-5 sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
              N
            </div>

            <div className="h-8 w-8 rounded-lg bg-slate-950" />
            <div className="h-8 w-8 rounded-lg bg-slate-200" />
            <div className="h-8 w-8 rounded-lg bg-slate-200" />
            <div className="h-8 w-8 rounded-lg bg-slate-200" />
          </div>

          {/* Main Dashboard */}
          <div className="min-w-0 flex-1 p-5 sm:p-7">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Good morning 👋
                </p>

                <h3 className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">
                  Team Overview
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                ST
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  Productivity
                </p>

                <p className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
                  94.8%
                </p>

                <p className="mt-1 text-[10px] font-semibold text-emerald-600 sm:text-xs">
                  ↑ 12.4%
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  Tasks completed
                </p>

                <p className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
                  1,284
                </p>

                <p className="mt-1 text-[10px] font-semibold text-emerald-600 sm:text-xs">
                  ↑ 18.2%
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 sm:text-sm">
                  Team Performance
                </span>

                <span className="text-[10px] font-medium text-slate-400 sm:text-xs">
                  Last 7 days
                </span>
              </div>

              <div className="mt-6 flex h-32 items-end justify-between gap-2">
                {[
                  "38%",
                  "55%",
                  "45%",
                  "72%",
                  "62%",
                  "84%",
                  "96%",
                ].map((height, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 items-end"
                  >
                    <div
                      className={`w-full rounded-t-md ${
                        index === 6
                          ? "bg-slate-950"
                          : "bg-slate-200"
                      }`}
                      style={{ height }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card 1 */}
      <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60 sm:-left-8 sm:p-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-600">
          ✓
        </span>

        <div>
          <p className="text-xs font-bold text-slate-950 sm:text-sm">
            Task completed
          </p>

          <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">
            Just now
          </p>
        </div>
      </div>

      {/* Floating Card 2 */}
      <div className="absolute -right-2 -top-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 sm:-right-6">
        <p className="text-lg font-bold text-emerald-600">+28.6%</p>

        <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-xs">
          Growth this month
        </p>
      </div>
    </div>
  </div>
</section>


);
};

export default Hero;
