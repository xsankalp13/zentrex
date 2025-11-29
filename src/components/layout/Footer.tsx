const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">ZENTREX.</h2>
            <p className="text-stone-400 text-sm leading-relaxed">
              Redefining the workspace with chairs designed for the modern visionary.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              {['Office Chairs', 'Gaming', 'Lounge'].map(item => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              {['Track Order', 'Warranty', 'Help Center'].map(item => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-stone-400 mb-4">Subscribe for exclusive designs.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-stone-800 border-none text-sm px-4 py-2 w-full focus:ring-1 focus:ring-white outline-none"
              />
              <button className="bg-white text-stone-900 px-4 py-2 text-sm font-bold hover:bg-stone-200 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; 2024 Zentrex Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-stone-300">Privacy Policy</span>
            <span className="cursor-pointer hover:text-stone-300">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;