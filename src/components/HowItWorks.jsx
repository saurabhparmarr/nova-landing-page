import {
ArrowRight,
CheckCircle2,
Rocket,
Settings2,
UserPlus,
} from "lucide-react";

const steps = [
{
number: "01",
icon: UserPlus,
title: "Create your workspace",
description:
"Set up your NOVA workspace and invite your team in just a few clicks.",
},
{
number: "02",
icon: Settings2,
title: "Connect your workflow",
description:
"Bring your projects, tasks, and existing tools together in one place.",
},
{
number: "03",
icon: Rocket,
title: "Start achieving more",
description:
"Automate repetitive work, understand your data, and accelerate your results.",
},
];

const HowItWorks = () => {
return ( <section
   id="how-it-works"
   className="scroll-mt-20 bg-slate-50 px-6 py-24 lg:px-8 lg:py-32"
 > <div className="mx-auto max-w-7xl">
{/* Heading */} <div className="mx-auto mb-14 max-w-3xl text-center"> <span className="text-xs font-bold tracking-[0.2em] text-slate-500">
HOW IT WORKS </span>

      <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
        From setup to
        <span className="block text-slate-500">
          success in three steps.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Getting started with NOVA is simple. No complicated setup, no
        lengthy onboarding—just a smarter way to work.
      </p>
    </div>

    {/* Steps */}
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-5">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div
            className="relative"
            key={step.number}
          >
            <article className="group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 sm:p-8">
              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-wider text-slate-400">
                  {step.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-950 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                  <Icon size={22} />
                </div>
              </div>

              {/* Content */}
              <h3 className="mt-8 text-xl font-bold tracking-tight text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>

              {/* Check */}
              <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2
                  size={16}
                  className="text-emerald-600"
                />
                <span>Ready in minutes</span>
              </div>
            </article>

            {/* Arrow */}
            {index < steps.length - 1 && (
              <div className="pointer-events-none absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 lg:flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm">
                <ArrowRight size={18} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>


);
};

export default HowItWorks;
