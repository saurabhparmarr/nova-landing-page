
import {
  BrainCircuit,
  ChartNoAxesCombined,
  CheckCircle2,
  Cloud,
  Lock,
  Users,
  Zap,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Insights",
    description:
      "Turn complex data into clear, actionable insights with intelligent automation.",
  },
  {
    icon: Workflow,
    title: "Smart Workflows",
    description:
      "Build automated workflows that keep your team moving without repetitive work.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Bring conversations, tasks, and projects together in one connected workspace.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Real-Time Analytics",
    description:
      "Monitor performance and make better decisions with live business insights.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Protect your team's information with secure access and modern data controls.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Designed for speed so your team can focus on work instead of waiting.",
  },
  {
    icon: Cloud,
    title: "Cloud Workspace",
    description:
      "Access your work securely from anywhere, on any device, whenever you need it.",
  },
  {
    icon: CheckCircle2,
    title: "Easy to Use",
    description:
      "A clean, intuitive experience that your entire team can start using instantly.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="scroll-mt-20 bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-slate-500">
            POWERFUL FEATURES
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Everything your team needs
            <span className="block text-slate-500">
              to move faster.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            NOVA gives modern teams the tools they need to automate,
            collaborate, analyze, and grow—all from one platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-950 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                  <Icon size={23} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-950">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>

                {/* Arrow */}
                <span className="mt-6 block text-lg font-semibold text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-950">
                  →
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
