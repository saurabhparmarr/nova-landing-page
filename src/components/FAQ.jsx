import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
{
question: "What is NOVA?",
answer:
"NOVA is an AI-powered workspace that helps teams manage projects, automate workflows, collaborate, and understand their business data from one platform.",
},
{
question: "Can I try NOVA for free?",
answer:
"Yes. NOVA's Starter plan is free, and the Growth plan includes a free trial so you can explore the platform before upgrading.",
},
{
question: "Is NOVA suitable for small teams?",
answer:
"Absolutely. NOVA is designed for teams of all sizes, from early-stage startups to large organizations.",
},
{
question: "Can NOVA integrate with our existing tools?",
answer:
"Yes. NOVA is designed to fit into your existing workflow and supports integrations through its platform and APIs.",
},
{
question: "Is my team's data secure?",
answer:
"NOVA is built with modern security practices and access controls to help keep your team's information protected.",
},
{
question: "Can I upgrade or cancel my plan anytime?",
answer:
"Yes. You can change your plan as your team's needs evolve without being locked into a long-term commitment.",
},
];

const FAQ = () => {
const [openIndex, setOpenIndex] = useState(0);

const toggleFAQ = (index) => {
setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
};

return ( <section
   id="faq"
   className="scroll-mt-20 bg-slate-50 px-6 py-24 lg:px-8 lg:py-32"
 > <div className="mx-auto max-w-4xl">
{/* Heading */} <div className="mb-12 text-center"> <span className="text-xs font-bold tracking-[0.2em] text-slate-500">
FAQ </span>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Questions?
        <span className="block text-slate-500">We've got answers.</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Everything you need to know about getting started with NOVA.
      </p>
    </div>

    {/* FAQ List */}
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-slate-300 bg-white shadow-sm"
                : "border-slate-200 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-inset sm:px-6"
            >
              <span className="text-sm font-semibold text-slate-950 sm:text-base">
                {faq.question}
              </span>

              <ChevronDown
                size={20}
                aria-hidden="true"
                className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`grid transition-all duration-300 ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


);
};

export default FAQ;
