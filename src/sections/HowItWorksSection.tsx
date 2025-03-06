import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Instant Blockchain Interactions',
      description: 'BLAZE infrastructure makes blockchain operations instantly responsive, without waiting for confirmations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-legacy mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Signet Extension Activation',
      description: 'When required, Signet Extension handles transaction signing with a seamless, secure user experience.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-legacy mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'On-chain Confirmation',
      description: 'Behind the scenes, BLAZE ensures all operations are properly confirmed and secured on the blockchain.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-legacy mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 bg-space-black overflow-hidden" id="how-it-works">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-15"></div>
      
      {/* Brand pattern overlay - low opacity */}
      <div className="absolute inset-0 bg-circuit-pattern bg-cover bg-center opacity-5 mix-blend-screen"></div>
      
      {/* Animated glow elements */}
      <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-primary-legacy/5 rounded-full filter blur-[100px] animate-pulse-glow"></div>
      <div className="absolute top-1/4 right-1/5 w-64 h-64 bg-accent-legacy/5 rounded-full filter blur-[80px] animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary-legacy uppercase bg-space-dark border border-primary-legacy/30 rounded-sm">
            The Magic Behind It
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            How <span className="cyber-text">BLAZE</span> & <span className="cyber-text">Signet</span> Work Together
          </h2>
          <p className="text-xl text-steel-light max-w-3xl mx-auto">
            BLAZE infrastructure with Signet Extension creates a seamless user experience that's indistinguishable from web2 applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="card-cyber h-full relative overflow-hidden p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-legacy/0 via-primary-legacy/10 to-primary-legacy/0 group-hover:animate-shimmer"></div>
                <div className="bg-space-dark/95 p-8 rounded h-full backdrop-blur-sm relative z-10">
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-legacy/20 flex items-center justify-center cyber-text font-bold border border-primary-legacy/40 group-hover:shadow-neon transition-shadow duration-300">
                    {step.number}
                  </div>
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-primary-legacy/5 rounded-full filter blur-lg transform group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="relative">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:cyber-text transition-colors duration-300">{step.title}</h3>
                  <p className="text-steel-light">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary-legacy/70">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-cyber relative overflow-hidden p-1 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-legacy/0 via-primary-legacy/10 to-primary-legacy/0 group-hover:animate-shimmer"></div>
            <div className="bg-space-dark/95 p-8 rounded h-full backdrop-blur-sm relative z-10">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary-legacy uppercase bg-space-dark border border-primary-legacy/30 rounded-sm">
                User Experience
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:cyber-text transition-colors duration-300">For Users</h3>
              <p className="text-steel-light mb-6">
                Users experience the speed and simplicity of web2 applications while maintaining the security and ownership benefits of blockchain technology.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-legacy/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary-legacy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-steel-light">No waiting for blockchain confirmations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-legacy/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary-legacy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-steel-light">Intuitive, familiar interfaces with no blockchain jargon</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-legacy/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary-legacy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-steel-light">Full security with the Signet Extension companion</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="card-cyber relative overflow-hidden p-1 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-legacy/0 via-primary-legacy/10 to-primary-legacy/0 group-hover:animate-shimmer"></div>
            <div className="bg-space-dark/95 p-8 rounded h-full backdrop-blur-sm relative z-10">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary-legacy uppercase bg-space-dark border border-primary-legacy/30 rounded-sm">
                Developer Experience
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:cyber-text transition-colors duration-300">For Developers</h3>
              <p className="text-steel-light mb-6">
                Developers can build web3 applications using familiar paradigms without worrying about blockchain complexity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-legacy/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary-legacy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-steel-light">Simple SDKs that abstract away blockchain complexity</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-legacy/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary-legacy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-steel-light">Real-time updates without waiting for confirmations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-legacy/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary-legacy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-steel-light">Comprehensive tooling for specialized use cases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#demo" 
            className="inline-flex items-center btn-outline py-3 px-8 rounded-md"
          >
            <span className="mr-2">See it in action</span>
            <svg className="w-5 h-5 text-primary-legacy animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;