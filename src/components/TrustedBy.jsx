const TrustedBy = () => {
const companies = ["Vertex", "Orbit", "Luma", "Nexora", "Aether"];

return ( <section className="border-y border-slate-200 bg-white px-6 py-10 lg:px-8 lg:py-12"> <div className="mx-auto max-w-7xl"> <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
Trusted by forward-thinking teams worldwide </p>

    <div className="mt-8 grid grid-cols-2 items-center gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
      {companies.map((company) => (
        <div
          key={company}
          className="group flex items-center justify-center gap-2.5 rounded-2xl border border-transparent px-4 py-4 text-slate-500 transition-all duration-300 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-950"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-950 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
            {company.charAt(0)}
          </span>

          <span className="text-sm font-bold tracking-tight sm:text-base">
            {company}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>


);
};

export default TrustedBy;
