"use client";
import FadeIn from "../common/FadeIn";
import { Activity, Move, Zap } from 'lucide-react';

const painPoints = [
  {
    icon: Activity,
    area: "Cervical Spine (Neck)",
    problem: "Tech Neck & Stiffness",
    solution: "Our 4D Adjustable Headrest cradles your occipital bone, relieving 11lbs of pressure from your neck muscles instantly."
  },
  {
    icon: Move,
    area: "Lumbar Region (Lower Back)",
    problem: "Sciatica & Compression",
    solution: "The Dynamic Lumbar System (DLS) pushes forward as you recline, filling the gap between your spine and the chair."
  },
  {
    icon: Zap,
    area: "Circulation (Legs)",
    problem: "Numbness & Fatigue",
    solution: "A waterfall seat edge and high-elastic mesh prevent blood vessel constriction, keeping focus sharp for hours."
  }
];

const AnatomyGrid = () => {
  return (
    <section className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Engineered for the Human Skeleton</h2>
            <p className="text-stone-400 text-lg">
              Most chairs are built for showrooms. Zentrex is built for the biology of high-performance professionals.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((item, i) => (
            <FadeIn key={i} delay={i * 0.2} className="bg-stone-800 p-8 rounded-sm border border-stone-700 hover:border-stone-500 transition-colors">
              <div className="w-12 h-12 bg-white text-stone-900 rounded-full flex items-center justify-center mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">{item.area}</h3>
              <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-4">Eliminates: {item.problem}</p>
              <p className="text-stone-400 leading-relaxed text-sm">
                {item.solution}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnatomyGrid;