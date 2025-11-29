const Bibliography = () => {
  return (
    <section className="bg-stone-50 py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">References & Clinical Studies</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 text-[10px] text-stone-500 font-mono">
          <div className="flex gap-2">
            <span>[1]</span>
            <p>Dainoff, M. J. (2003). Programmatic approach to office ergonomics. <em>Center for Ergonomic Research, Miami University.</em></p>
          </div>
          <div className="flex gap-2">
            <span>[2]</span>
            <p>Bashir, W. et al. (2006). The Way You Sit Will Save Your Back. <em>RSNA Annual Meeting.</em></p>
          </div>
          <div className="flex gap-2">
            <span>[3]</span>
            <p>Hedge, A. (2016). Effects of Adjustable Chair Design on Comfort and Performance. <em>Cornell Human Factors.</em></p>
          </div>
          <div className="flex gap-2">
            <span>[4]</span>
            <p>OSHA Guidelines (3125). Ergonomics: The Study of Work. <em>U.S. Department of Labor.</em></p>
          </div>
          <div className="flex gap-2">
            <span>[5]</span>
            <p>Wilke, H.J. et al. (1999). New in vivo measurements of pressures in the intervertebral disc in daily life. <em>Spine.</em></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bibliography;