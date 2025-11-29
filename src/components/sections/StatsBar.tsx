import FadeIn from "../common/FadeIn";

const stats = [
  { value: "40%", label: "Less Spinal Load", sub: "Compared to static chairs" },
  { value: "14h", label: "Rated Usage", sub: "Engineered for overtime" },
  { value: "0", label: "Pressure Points", sub: "Suspension mesh technology" },
];

const citations = [
  "Design Award 2024",
  "TechCrunch",
  "Architectural Digest",
  "Forbes Lifestyle"
];

const StatsBar = () => {
  return (
    <section className="bg-stone-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-stone-800 pb-16">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1} className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">{stat.value}</div>
              <div className="text-lg font-bold text-stone-200">{stat.label}</div>
              <div className="text-sm text-stone-500 mt-1">{stat.sub}</div>
            </FadeIn>
          ))}
        </div>

        {/* Citations / Awards */}
        <FadeIn delay={0.4} className="pt-16 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {citations.map((cite, i) => (
             <span key={i} className="text-xl md:text-2xl font-serif italic tracking-wide text-stone-400">
               {cite}
             </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};

export default StatsBar;