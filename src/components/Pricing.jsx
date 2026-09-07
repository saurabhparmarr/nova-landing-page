import { Check, ArrowRight } from "lucide-react";

const plans = [
{
name: "Starter",
description: "For individuals and small teams getting started.",
price: "$0",
period: "forever",
features: [
"Up to 3 team members",
"5 active projects",
"Basic analytics",
"AI insights",
"Community support",
],
button: "Start for Free",
},
{
name: "Growth",
description: "For growing teams that need more power.",
price: "$19",
period: "per user / month",
popular: true,
features: [
"Unlimited team members",
"Unlimited projects",
"Advanced analytics",
"AI automation",
"Priority support",
"Custom workflows",
],
button: "Start Free Trial",
},
{
name: "Enterprise",
description: "For organizations with advanced requirements.",
price: "Custom",
period: "Let's talk",
features: [
"Everything in Growth",
"Advanced security controls",
"Dedicated success manager",
"Custom integrations",
"SLA & premium support",
"Enterprise onboarding",
],
button: "Contact Sales",
},
];

const Pricing = () => {
const handlePlanClick = (planName) => {
if (planName === "Enterprise") {
window.location.href = "mailto:sales@nova.com?subject=NOVA Enterprise Inquiry";
return;
}

const ctaSection = document.getElementById("cta");

if (ctaSection) {
  ctaSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}


};

return ( <section
   id="pricing"
   className="scroll-mt-20 bg-white px-6 py-24 lg:px-8 lg:py-32"
 > <div className="mx-auto max-w-7xl">
{/* Heading */} <div className="mx-auto mb-14 max-w-3xl text-center"> <span className="text-xs font-bold tracking-[0.2em] text-slate-500">
SIMPLE PRICING </span>


      <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
        Start small.
        <span className="block text-slate-500">
          Scale without limits.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Choose the plan that fits your team today. Upgrade whenever
        you're ready.
      </p>
    </div>

    {/* Pricing Cards */}
    <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
      {plans.map((plan) => (
        <article
          key={plan.name}
          className={`group relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 sm:p-8 ${
            plan.popular
              ? "border-slate-950 bg-slate-950 text-white shadow-2xl shadow-slate-300/40 lg:-translate-y-2"
              : "border-slate-200 bg-white text-slate-950 shadow-sm hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
          }`}
        >
          {/* Popular Badge */}
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] text-slate-950 shadow-md">
              MOST POPULAR
            </div>
          )}

          {/* Header */}
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              {plan.name}
            </h3>

            <p
              className={`mt-3 min-h-[48px] text-sm leading-6 ${
                plan.popular ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {plan.description}
            </p>

            {/* Price */}
            <div className="mt-7 flex items-end gap-2">
              <strong className="text-4xl font-bold tracking-tight sm:text-5xl">
                {plan.price}
              </strong>

              <span
                className={`mb-1 text-xs ${
                  plan.popular ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {plan.period}
              </span>
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={() => handlePlanClick(plan.name)}
            className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${
              plan.popular
                ? "bg-white text-slate-950 hover:bg-slate-100 hover:shadow-lg"
                : "border border-slate-300 bg-white text-slate-950 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
            }`}
          >
            {plan.button}
            <ArrowRight size={16} aria-hidden="true" />
          </button>

          {/* Divider */}
          <div
            className={`my-8 h-px ${
              plan.popular ? "bg-slate-800" : "bg-slate-200"
            }`}
          />

          <p
            className={`text-xs font-bold uppercase tracking-wider ${
              plan.popular ? "text-slate-300" : "text-slate-500"
            }`}
          >
            What's included:
          </p>

          {/* Features */}
          <ul className="mt-5 space-y-4">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className={`flex items-start gap-3 text-sm ${
                  plan.popular ? "text-slate-200" : "text-slate-600"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    plan.popular
                      ? "bg-white/10 text-white"
                      : "bg-slate-100 text-slate-950"
                  }`}
                >
                  <Check
                    size={13}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
</section>


);
};

export default Pricing;
