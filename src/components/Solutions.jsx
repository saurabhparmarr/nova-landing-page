import {
Building2,
GraduationCap,
HeartPulse,
Megaphone,
ShoppingBag,
Sparkles,
} from "lucide-react";

const solutions = [
{
icon: Building2,
title: "For Enterprises",
description:
"Give large teams the visibility, automation, and collaboration tools they need to scale efficiently.",
},
{
icon: Sparkles,
title: "For Startups",
description:
"Move from idea to execution faster with an agile workspace designed for growing teams.",
},
{
icon: ShoppingBag,
title: "For E-commerce",
description:
"Connect operations, customer insights, and performance analytics to grow your online business.",
},
{
icon: Megaphone,
title: "For Marketing Teams",
description:
"Plan campaigns, automate workflows, and understand what drives your best results.",
},
{
icon: GraduationCap,
title: "For Education",
description:
"Coordinate teams, projects, and learning workflows from one simple digital workspace.",
},
{
icon: HeartPulse,
title: "For Healthcare",
description:
"Simplify team coordination and operational workflows while keeping information organized.",
},
];

const Solutions = () => {
return ( <section
   id="solutions"
   className="scroll-mt-20 bg-slate-50 px-6 py-24 lg:px-8 lg:py-32"
 > <div className="mx-auto max-w-7xl">
{/* Heading */} <div className="mx-auto mb-14 max-w-3xl text-center"> <span className="text-xs font-bold tracking-[0.2em] text-slate-500">
BUILT FOR EVERY TEAM </span>

      <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
        One platform.
        <span className="block text-slate-500">
          Endless possibilities.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Whether you're building a startup or managing an enterprise, NOVA
        adapts to the way your team works.
      </p>
    </div>

    {/* Solutions Grid */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {solutions.map((solution) => {
        const Icon = solution.icon;

        return (
          <article
            key={solution.title}
            className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 sm:p-8"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-950 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
              <Icon size={23} />
            </div>

            {/* Content */}
            <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-950">
              {solution.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
              {solution.description}
            </p>

            {/* Link */}
            <a
              href="#pricing"
              className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-slate-950 transition-all duration-200 group-hover:translate-x-1"
            >
              Learn more
              <span className="ml-1.5">→</span>
            </a>
          </article>
        );
      })}
    </div>
  </div>
</section>


);
};

export default Solutions;
