"use client";
import FadeIn from "../common/FadeIn";
import { useState } from "react";
import { Info } from "lucide-react";

const facts = [
  {
    title: "The Nachemson Chart",
    fact: "Sitting leans puts 185% pressure on your discs compared to standing (100%). The Zentrex recline reduces this to roughly 50%.",
  },
  {
    title: "The 'C' Curve Danger",
    fact: "Standard chairs force your spine into a 'C' shape. Zentrex forces an 'S' shape, matching your natural standing posture.",
  },
  {
    title: "Ischial Tuberosities",
    fact: "These are your 'sit bones.' Our mesh acts like a hammock, preventing the pressure points that cause your legs to fall asleep.",
  }
];

const ScienceTrivia = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-blue-50 border-y border-blue-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-6">
            <Info size={16} />
            <span>Ergonomics 101</span>
          </div>
          
          <h2 className="text-3xl font-bold text-stone-900 mb-12">Why your back actually hurts</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {facts.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`p-6 text-left rounded-lg transition-all duration-300 border ${
                  active === i 
                    ? "bg-white shadow-lg border-blue-200 scale-105" 
                    : "bg-white/50 border-transparent hover:bg-white"
                }`}
              >
                <h3 className={`font-bold mb-2 ${active === i ? "text-blue-600" : "text-stone-900"}`}>
                  {item.title}
                </h3>
                {active === i && (
                  <p className="text-sm text-stone-600 leading-relaxed animate-fade-in">
                    {item.fact}
                  </p>
                )}
                {active !== i && (
                  <p className="text-xs text-stone-400">Click to learn more</p>
                )}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ScienceTrivia;