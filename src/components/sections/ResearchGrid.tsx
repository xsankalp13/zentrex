"use client";
import FadeIn from "../common/FadeIn";
import { BookOpen, TrendingUp, Activity } from "lucide-react";

const studies = [
  {
    icon: TrendingUp,
    stat: "+17.7%",
    claim: "Productivity Increase",
    context: "Employees provided with highly adjustable ergonomic chairs showed significantly higher output compared to control groups.",
    citation: "Journal of Safety Research (2003)",
    sourceLink: "https://pubmed.ncbi.nlm.nih.gov/"
  },
  {
    icon: Activity,
    stat: "135°",
    claim: "Optimal Spine Angle",
    context: "Radiological studies show that sitting at a 135° recline places the least amount of strain on the lumbar discs, contradicting the 'sit straight' myth.",
    citation: "Radiological Society of North America (2006)",
    sourceLink: "#"
  },
  {
    icon: BookOpen,
    stat: "40%",
    claim: "Symptom Reduction",
    context: "Implementation of ergonomic intervention resulted in a 40% reduction in musculoskeletal symptoms (lower back, shoulders, neck) within 6 months.",
    citation: "Cornell University Human Factors Laboratory",
    sourceLink: "https://ergo.human.cornell.edu/"
  }
];

const ResearchGrid = () => {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Don't Trust Us.<br/>Trust the Physics.</h2>
            <p className="text-stone-400 max-w-2xl text-lg">
              We didn't design the Zentrex Apex based on trends. We designed it based on 
              peer-reviewed research regarding spinal load and cognitive performance.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 p-8 rounded-sm hover:bg-stone-800 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {study.stat}
                  </div>
                  <study.icon className="text-stone-500 group-hover:text-white transition-colors" size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{study.claim}</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                  {study.context}
                </p>
                
                <div className="pt-6 border-t border-stone-700/50">
                  <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">Source</p>
                  <cite className="text-xs text-stone-300 not-italic flex items-center gap-2">
                    {study.citation}
                  </cite>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchGrid;