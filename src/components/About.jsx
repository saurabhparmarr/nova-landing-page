import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const About = () => {
  const benefits = [
    "One workspace for your entire team",
    "AI-powered automation and insights",
    "Real-time visibility into your business",
    "Simple setup with no technical expertise",
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-24">

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Main Card */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/50 sm:p-8">

            {/* Top */}
            <div className="mb-10 flex items-center justify-between">
              <span className="text-xs font-bold tracking-[0.18em] text-slate-500">
                NOVA INTELLIGENCE
              </span>

              <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live
              </span>
            </div>

            {/* Performance */}
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-slate-500">
                Overall Performance
              </p>

              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold tracking-tight text-slate-950">
                  92.4%
                </span>

                <span className="mb-1 text-sm font-semibold text-emerald-600">
                  ↑ 14.8% this month
                </span>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-slate-950"
                style={{ width: "92%" }}
              />
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Active Projects", "24"],
                ["Team Members", "86"],
                ["Tasks Done", "1.2K"],
                ["Hours Saved", "348"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <p className="mb-2 text-xs font-medium text-slate-500">
                    {label}
                  </p>

                  <p className="text-2xl font-bold text-slate-950">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating AI Card */}
          <div className="absolute -bottom-8 -right-4 flex max-w-xs items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 sm:-right-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
              AI
            </div>

            <div>
              <p className="text-sm font-bold text-slate-950">
                Smart recommendation
              </p>

              <p className="mt-1 text-xs text-slate-500">
                3 opportunities detected
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-slate-500">
            ONE POWERFUL PLATFORM
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Work smarter.
            <span className="block text-slate-500">Grow faster.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            NOVA combines intelligent automation, collaboration, and analytics
            into a single workspace—so your team can spend less time managing
            work and more time creating impact.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div
                className="flex items-center gap-3"
                key={benefit}
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-slate-950"
                />

                <span className="text-sm font-medium text-slate-700 sm:text-base">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Link */}
          <a
            href="#solutions"
            className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:gap-3"
          >
            Explore NOVA
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

