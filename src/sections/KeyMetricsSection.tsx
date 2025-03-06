import React from 'react';

const KeyMetricsSection: React.FC = () => {
  const metrics = [
    {
      value: '100K+',
      label: 'Active Users',
      description: 'Trust BLAZE & Signet for their web3 needs'
    },
    {
      value: '$1B+',
      label: 'Transaction Volume',
      description: 'Securely processed through our platform'
    },
    {
      value: '5M+',
      label: 'Signatures',
      description: 'Generated with uncompromised security'
    },
    {
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliability you can count on'
    }
  ];

  return (
    <section className="relative py-24 bg-space-black overflow-hidden" id="metrics">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-15"></div>
      
      {/* Brand pattern overlay - low opacity */}
      <div className="absolute inset-0 bg-circuit-pattern bg-cover bg-center opacity-5 mix-blend-screen"></div>
      
      {/* Animated glow elements */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-legacy/5 rounded-full filter blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-legacy/5 rounded-full filter blur-[80px] animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary-legacy uppercase bg-space-dark border border-primary-legacy/30 rounded-sm">
            Infrastructure Scale
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            Trusted by <span className="cyber-text">Thousands</span>
          </h2>
          <p className="text-xl text-steel-light max-w-3xl mx-auto">
            The BLAZE ecosystem with Signet Extension provides a secure and reliable web3 infrastructure trusted by developers and users worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="card-cyber relative overflow-hidden p-[1px] group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-legacy/0 via-primary-legacy/10 to-primary-legacy/0 group-hover:animate-shimmer"></div>
              <div className="bg-space-dark/95 p-8 rounded backdrop-blur-sm relative z-10 text-center h-full flex flex-col justify-center">
                <div className="relative mb-2">
                  <div className="absolute inset-0 -top-6 bg-primary-legacy/10 filter blur-xl transform group-hover:scale-125 opacity-70 transition-all duration-500 rounded-full"></div>
                  <div className="text-4xl md:text-5xl font-bold cyber-text mb-2 relative">{metric.value}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:cyber-text transition-colors duration-300">{metric.label}</h3>
                <p className="text-steel-light">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <div className="inline-block px-4 py-2 bg-space-dark border border-primary-legacy/30 rounded-lg shadow-neon-sm">
            <p className="text-steel-light text-center">
              <span className="mr-2">Powering the future of web3 infrastructure</span>
              <span className="inline-block w-2 h-2 rounded-full bg-primary-legacy animate-pulse-glow"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsSection;