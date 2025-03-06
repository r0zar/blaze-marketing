import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const FeaturesSection: React.FC = () => {
  const blazeFeatures = [
    {
      title: 'Lightning Fast',
      description: 'Instant responsiveness that makes blockchain operations feel like web2 interactions',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-legacy mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Invisible Blockchain',
      description: 'Blockchain complexity is hidden from users while maintaining all benefits',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-legacy mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Developer Simplicity',
      description: 'Simple APIs and SDKs that make web3 development as easy as web2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-legacy mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Enterprise Security',
      description: 'Security built-in at every layer without compromising on user experience',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-legacy mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Complete Ecosystem',
      description: 'All tools work together seamlessly to provide an end-to-end solution',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-legacy mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'Seamless Signing',
      description: 'Signet Extension brings frictionless transaction signing to complete the user experience',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-legacy mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 bg-space-black overflow-hidden" id="features">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-15"></div>
      
      {/* Brand pattern overlay - low opacity */}
      <div className="absolute inset-0 bg-circuit-pattern bg-cover bg-center opacity-5 mix-blend-screen"></div>
      
      {/* Animated glow elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-legacy/5 rounded-full filter blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent-legacy/5 rounded-full filter blur-[80px] animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary-legacy uppercase bg-space-dark border border-primary-legacy/30 rounded-sm">
            Breakthrough Technology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            The <span className="cyber-text">BLAZE</span> Difference
          </h2>
          <p className="text-xl text-steel-light max-w-3xl mx-auto">
            BLAZE infrastructure makes web3 applications indistinguishable from web2 in user experience,
            with <span className="cyber-text">Signet Extension</span> handling the final mile of transaction signing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blazeFeatures.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary-legacy/10 rounded-full filter blur-lg transform group-hover:scale-125 transition-transform duration-500"></div>
                  <div className="relative">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:cyber-text transition-colors duration-300">{feature.title}</h3>
                <p className="text-steel-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 card-cyber relative overflow-hidden p-1 group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-legacy/0 via-primary-legacy/10 to-primary-legacy/0 animate-shimmer"></div>
          <div className="bg-space-dark/95 p-8 rounded backdrop-blur-sm relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-legacy uppercase bg-space-dark border border-primary-legacy/30 rounded-sm">
                  Companion Extension
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Signet Extension: The Final Mile</h3>
                <p className="text-steel-light mb-6">
                  While BLAZE infrastructure handles the heavy lifting, Signet Extension completes the user experience by making transaction signing frictionless and secure.
                </p>
                <ul className="space-y-4 text-steel-light mb-8">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-legacy/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-legacy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Private keys never leave your device, ensuring maximum security
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-legacy/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-legacy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Seamless integration with all BLAZE-powered applications
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-legacy/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-legacy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Multi-chain support for all major blockchains
                  </li>
                </ul>
                <a href="https://chrome.google.com/webstore/detail/signet/extension-id" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Get Signet Extension
                </a>
              </div>
              <div className="md:w-1/3">
                {/* Signet Extension UI mockup */}
                <div className="relative p-1 bg-space-dark rounded-lg border border-primary-legacy/30 shadow-neon overflow-hidden group-hover:shadow-glow transition-shadow duration-500">
                  {/* Extension header */}
                  <div className="bg-space-dark rounded-t-lg p-3 border-b border-primary-legacy/20">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary-legacy/20 flex items-center justify-center mr-2">
                        <div className="h-3 w-3 bg-primary-legacy rounded-full animate-pulse-glow"></div>
                      </div>
                      <span className="text-primary-legacy font-semibold">Signet</span>
                      <div className="ml-auto flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-steel-DEFAULT/50"></div>
                        <div className="h-2 w-2 rounded-full bg-steel-DEFAULT/50"></div>
                        <div className="h-2 w-2 rounded-full bg-steel-DEFAULT/50"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Extension body */}
                  <div className="p-4 bg-space-dark">
                    <div className="mb-4 p-3 bg-space-gray/50 rounded border border-steel-dark/30">
                      <div className="h-3 w-20 bg-steel-DEFAULT/40 rounded-sm mb-2"></div>
                      <div className="h-5 w-full bg-steel-DEFAULT/20 rounded-sm"></div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-xs text-steel-light mb-1">Transaction Details</div>
                      <div className="p-3 bg-space-gray/50 rounded border border-steel-dark/30">
                        <div className="flex justify-between mb-2">
                          <div className="h-3 w-12 bg-steel-DEFAULT/40 rounded-sm"></div>
                          <div className="h-3 w-20 bg-primary-legacy/40 rounded-sm"></div>
                        </div>
                        <div className="flex justify-between mb-2">
                          <div className="h-3 w-14 bg-steel-DEFAULT/40 rounded-sm"></div>
                          <div className="h-3 w-16 bg-steel-DEFAULT/40 rounded-sm"></div>
                        </div>
                        <div className="flex justify-between">
                          <div className="h-3 w-10 bg-steel-DEFAULT/40 rounded-sm"></div>
                          <div className="h-3 w-12 bg-steel-DEFAULT/40 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mb-3">
                      <button className="flex-1 py-2 px-3 bg-primary-legacy/20 rounded text-xs text-primary-legacy font-medium border border-primary-legacy/30">Reject</button>
                      <button className="flex-1 py-2 px-3 bg-primary-legacy text-space-black text-xs font-medium rounded border border-primary-legacy/80 shadow-neon-strong">Approve</button>
                    </div>
                    
                    {/* Animated dots at bottom */}
                    <div className="flex justify-center space-x-1 mt-2">
                      <div className="h-1 w-6 bg-primary-legacy/70 rounded-full"></div>
                      <div className="h-1 w-1 bg-steel-DEFAULT/30 rounded-full"></div>
                      <div className="h-1 w-1 bg-steel-DEFAULT/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;