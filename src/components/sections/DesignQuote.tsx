import FadeIn from "../common/FadeIn";

const DesignQuote = () => {
  return (
    <section className="py-32 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="w-16 h-1 bg-stone-900 mx-auto mb-12"></div>
          <blockquote className="text-3xl md:text-5xl font-bold leading-tight text-stone-900 font-serif">
            "We believe a chair shouldn't just hold you. <br/> 
            <span className="text-stone-400">It should uphold your ambition.</span>"
          </blockquote>
          <div className="mt-12 flex flex-col items-center">
             <cite className="not-italic font-medium text-sm tracking-widest uppercase text-stone-900">
               Hiroshi Tanaka
             </cite>
             <span className="text-xs text-stone-500 mt-1">Lead Industrial Designer, Zentrex</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DesignQuote;