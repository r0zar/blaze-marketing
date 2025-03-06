import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-space-black overflow-hidden" id="cta">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-15"></div>
      
      {/* Brand pattern overlay - low opacity */}
      <div className="absolute inset-0 bg-circuit-pattern bg-cover bg-center opacity-5 mix-blend-screen"></div>
      
      {/* Animated glow elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-legacy/5 rounded-full filter blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-legacy/5 rounded-full filter blur-[80px] animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary-legacy uppercase bg-space-dark border border-primary-legacy/30 rounded-sm">
            Join The Future
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to <span className="cyber-text">Transform</span> Your Web3 Experience?
          </h2>
          <p className="text-xl mb-10 text-steel-light">
            Join the BLAZE ecosystem to make blockchain invisible to your users. Elevate your applications with web2-level UX powered by BLAZE infrastructure and Signet Extension.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://docs.blaze.example.com" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary py-4 px-10 text-lg font-medium"
            >
              Start Building
            </a>
            <a 
              href="https://chrome.google.com/webstore/detail/signet/placeholder" 
              target="_blank" 
              rel="noreferrer"
              className="btn-secondary py-4 px-10 text-lg font-medium"
            >
              Get Signet Extension
            </a>
            <a 
              href="#demo" 
              className="btn-outline py-4 px-10 text-lg font-medium"
            >
              Try Demo
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {[
              { value: '100K+', label: 'Active Users' },
              { value: '5M+', label: 'Transactions' },
              { value: '99.9%', label: 'Uptime' },
              { value: '10+', label: 'SDKs & Tools' }
            ].map((item, index) => (
              <div className="text-center group" key={index}>
                <div className="relative mb-2">
                  <div className="absolute inset-0 -top-2 bg-primary-legacy/10 filter blur-lg transform group-hover:scale-125 opacity-70 transition-transform duration-500 rounded-full"></div>
                  <div className="text-3xl font-bold cyber-text mb-1 relative">{item.value}</div>
                </div>
                <div className="text-steel-light">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'For Developers',
              description: 'Access our comprehensive suite of SDKs and starter templates to build blockchain applications with web2-level experiences.',
              link: 'https://docs.blaze.example.com',
              linkText: 'View Documentation'
            },
            {
              title: 'For Enterprises',
              description: 'Enterprise-grade solutions to integrate blockchain technology into your existing applications with minimal friction.',
              link: 'https://enterprise.blaze.example.com',
              linkText: 'Enterprise Solutions'
            },
            {
              title: 'For Users',
              description: 'Install the Signet Extension to enjoy seamless, secure interaction with any BLAZE-powered blockchain application.',
              link: 'https://chrome.google.com/webstore/detail/signet/placeholder',
              linkText: 'Get Signet Extension'
            }
          ].map((card, index) => (
            <div className="card-cyber relative overflow-hidden p-[1px] group" key={index}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-legacy/0 via-primary-legacy/10 to-primary-legacy/0 group-hover:animate-shimmer"></div>
              <div className="bg-space-dark/95 p-8 rounded backdrop-blur-sm relative z-10 h-full">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:cyber-text transition-colors duration-300">{card.title}</h3>
                <p className="text-steel-light mb-6">{card.description}</p>
                <a 
                  href={card.link} 
                  className="inline-flex items-center text-primary-legacy hover:text-primary-light transition-colors duration-300 font-medium"
                  target="_blank"
                  rel="noreferrer"
                >
                  {card.linkText}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Futuristic Design Element - Hover line effect */}
        <div className="mt-24 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-primary-legacy/0 via-primary-legacy/80 to-primary-legacy/0"></div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;