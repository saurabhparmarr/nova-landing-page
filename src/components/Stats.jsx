const Stats = () => {
const stats = [
{
value: "10K+",
label: "Teams using NOVA",
},
{
value: "98.7%",
label: "Customer satisfaction",
},
{
value: "42M+",
label: "Tasks automated",
},
{
value: "35%",
label: "Average productivity boost",
},
];

return ( <section className="border-y border-slate-200 bg-white px-6 py-16 lg:px-8 lg:py-20"> <div className="mx-auto max-w-7xl"> <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 lg:grid-cols-4 lg:divide-y-0">
{stats.map((stat) => ( <div
           className="group flex flex-col items-center justify-center px-5 py-8 text-center transition-all duration-300 hover:bg-slate-50 sm:px-8 lg:py-6"
           key={stat.label}
         > <strong className="text-4xl font-bold tracking-tight text-slate-950 transition-transform duration-300 group-hover:-translate-y-1 sm:text-5xl">
{stat.value} </strong>

          <span className="mt-3 max-w-[180px] text-xs font-medium leading-5 text-slate-500 sm:text-sm">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>


);
};

export default Stats;
