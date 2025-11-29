import FadeIn from "../common/FadeIn";

const specs = [
  { feature: "Lumbar Support", zentrex: "Dynamic 4D System", standard: "Fixed Plastic" },
  { feature: "Mesh Material", zentrex: "K-90 Aerospace Weave", standard: "Nylon Blend" },
  { feature: "Recline Angle", zentrex: "155° w/ Memory Lock", standard: "120° Basic Tilt" },
  { feature: "Base Material", zentrex: "Forged Aluminum Alloy", standard: "Plastic / Steel" },
  { feature: "Weight Capacity", zentrex: "350 lbs (158 kg)", standard: "250 lbs (113 kg)" },
];

const TechSpecs = () => {
  return (
    <section className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Technical Superiority</h2>
            <p className="text-stone-500">How Zentrex compares to the industry standard.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="overflow-hidden border border-stone-200 rounded-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <th className="p-6 text-sm font-bold text-stone-900 uppercase tracking-wider">Feature</th>
                  <th className="p-6 text-sm font-bold text-stone-900 uppercase tracking-wider bg-stone-100">Zentrex Apex</th>
                  <th className="p-6 text-sm font-bold text-stone-400 uppercase tracking-wider hidden md:table-cell">Standard Chair</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {specs.map((row, i) => (
                  <tr key={i} className="hover:bg-stone-50/50 transition-colors">
                    <td className="p-6 text-stone-600 font-medium">{row.feature}</td>
                    <td className="p-6 text-stone-900 font-bold bg-stone-50/30">{row.zentrex}</td>
                    <td className="p-6 text-stone-400 hidden md:table-cell">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TechSpecs;