import { Quote, Star } from "lucide-react";

const testimonials = [
{
name: "Sarah Mitchell",
role: "Head of Operations",
company: "Vertex Labs",
initials: "SM",
text: "NOVA completely changed how our team works. We've eliminated hours of repetitive tasks and finally have one place to understand our business.",
},
{
name: "Daniel Carter",
role: "Co-Founder",
company: "Orbit Studio",
initials: "DC",
text: "The combination of automation and real-time insights is incredible. Our team adopted NOVA almost instantly and productivity improved from day one.",
},
{
name: "Maya Rodriguez",
role: "Product Manager",
company: "Luma Technologies",
initials: "MR",
text: "NOVA gives us exactly what we need without overwhelming the team. It's powerful, intuitive, and has become an essential part of our workflow.",
},
];

const Testimonials = () => {
return ( <section
   id="testimonials"
   className="scroll-mt-20 bg-white px-6 py-24 lg:px-8 lg:py-32"
 > <div className="mx-auto max-w-7xl">
{/* Heading */} <div className="mx-auto mb-14 max-w-3xl text-center"> <span className="text-xs font-bold tracking-[0.2em] text-slate-500">
CUSTOMER STORIES </span>


      <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
        Loved by teams
        <span className="block text-slate-500">
          that move fast.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        See why ambitious teams choose NOVA to simplify their work and
        achieve more.
      </p>
    </div>

    {/* Testimonials */}
    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.name}
          className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 sm:p-8"
        >
          {/* Top */}
          <div className="flex items-center justify-between">
            <Quote
              size={28}
              className="text-slate-300 transition-colors duration-300 group-hover:text-slate-950"
              aria-hidden="true"
            />

            <div
              className="flex items-center gap-1 text-slate-950"
              aria-label="5 out of 5 stars"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={15}
                  fill="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <p className="mt-7 flex-1 text-base leading-7 text-slate-700">
            "{testimonial.text}"
          </p>

          {/* Author */}
          <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
              {testimonial.initials}
            </div>

            <div className="min-w-0">
              <strong className="block text-sm font-bold text-slate-950">
                {testimonial.name}
              </strong>

              <span className="mt-1 block truncate text-xs text-slate-500">
                {testimonial.role} · {testimonial.company}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


);
};

export default Testimonials;
