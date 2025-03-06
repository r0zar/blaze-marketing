import React from 'react';
import { Button } from '../components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-space-black py-24 md:py-32">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-15"></div>

      {/* Brand pattern overlay - low opacity */}
      <div className="absolute inset-0 bg-circuit-pattern bg-cover bg-center opacity-10 mix-blend-screen"></div>

      {/* Animated glow elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-legacy/5 rounded-full filter blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent-legacy/5 rounded-full filter blur-[80px] animate-pulse-glow"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-left">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary-legacy uppercase bg-space-dark border border-primary-legacy/30 rounded-sm">
              Next-Gen Web3 Infrastructure
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              <span className="cyber-text">BLAZE Protocol:</span> <span className="text-white">Blockchain</span> <span className="relative inline-block">
                <span className="relative z-10">Invisible</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-legacy/80 z-0"></span>
              </span>
            </h1>

            <p className="text-xl text-steel-light mb-8 max-w-xl">
              Breakthrough infrastructure that makes blockchain operations feel like web2, with
              <span className="cyber-text"> instant responsiveness</span> and
              <span className="cyber-text"> seamless UX</span>.
              Paired with Signet Extension for friction-free transaction signing.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#developers" className="btn-primary">
                <span className="relative z-10">For Developers</span>
              </a>
              <a href="https://chrome.google.com/webstore/detail/signet/extension-id"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary">
                Get Signet Extension
              </a>
              <a href="#about" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>

          <div className="flex-1 relative perspective-1000">
            {/* Futuristic App Interface with Brand Visual */}
            <div className="relative z-10 rounded overflow-hidden border border-primary-legacy/30 shadow-glow-sm hover:shadow-glow transition-all duration-500">
              <div className="w-full rounded bg-space-dark p-4 overflow-hidden">
                {/* Placeholder for custom brand image - we'd replace this with an actual image */}
                <div className="w-full h-[320px] rounded relative">
                  {/* The main illustration would be an image here */}
                  <div className="absolute inset-0 bg-space-gradient flex items-center justify-center">
                    {/* Cyber grid overlay for depth */}
                    <div className="absolute inset-0 cyber-grid opacity-30"></div>

                    {/* Simulated UI elements with brand styling */}
                    <div className="relative w-full h-full p-4 flex flex-col">
                      {/* Top bar with logo */}
                      <div className="h-10 w-full bg-space-dark/50 flex items-center px-4 rounded relative overflow-hidden border-b border-primary-legacy/20">
                        <div className="h-5 w-5 rounded-full bg-primary-legacy animate-pulse-glow"></div>
                        <div className="ml-3 text-primary-legacy font-bold">BLAZE</div>
                        <div className="ml-auto flex space-x-3">
                          <div className="h-3 w-16 bg-steel-DEFAULT/30 rounded-sm"></div>
                          <div className="h-3 w-10 bg-steel-DEFAULT/30 rounded-sm"></div>
                        </div>
                      </div>

                      {/* Main content area - with brand elements */}
                      <div className="flex flex-1 mt-4 space-x-4">
                        {/* Left panel - transactions list */}
                        <div className="w-1/3 bg-space-dark/70 rounded border border-steel-dark/30 p-3 flex flex-col">
                          <div className="h-4 w-20 bg-steel-DEFAULT/30 rounded-sm mb-4"></div>

                          {/* Transaction items with brand color highlights */}
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="mb-3 p-2 bg-space-gray/50 rounded flex items-center border-l-2 border-primary-legacy hover:bg-space-gray/80 transition-colors duration-200">
                              <div className="h-6 w-6 rounded-full bg-space-dark border border-primary-legacy/30 flex items-center justify-center mr-2">
                                <div className="h-3 w-3 rounded-full bg-primary-legacy/70"></div>
                              </div>
                              <div className="flex-1">
                                <div className="h-2 w-14 bg-steel-DEFAULT/40 rounded-sm mb-1"></div>
                                <div className="h-2 w-20 bg-steel-DEFAULT/20 rounded-sm"></div>
                              </div>
                              <div className="h-4 w-10 bg-primary-legacy/20 rounded-sm"></div>
                            </div>
                          ))}

                          {/* Highlight item with accent color */}
                          <div className="mb-3 p-2 bg-space-gray/50 rounded flex items-center border-l-2 border-accent-legacy hover:bg-space-gray/80 transition-colors duration-200">
                            <div className="h-6 w-6 rounded-full bg-space-dark border border-accent-legacy/30 flex items-center justify-center mr-2">
                              <div className="h-3 w-3 rounded-full bg-accent-legacy/70"></div>
                            </div>
                            <div className="flex-1">
                              <div className="h-2 w-14 bg-steel-DEFAULT/40 rounded-sm mb-1"></div>
                              <div className="h-2 w-20 bg-steel-DEFAULT/20 rounded-sm"></div>
                            </div>
                            <div className="h-4 w-10 bg-accent-legacy/20 rounded-sm"></div>
                          </div>
                        </div>

                        {/* Right panel - visualization and controls */}
                        <div className="w-2/3 flex flex-col space-y-4">
                          {/* Graph visualization with brand elements */}
                          <div className="flex-1 bg-space-dark/70 rounded border border-steel-dark/30 p-3 relative">
                            <div className="h-4 w-32 bg-steel-DEFAULT/30 rounded-sm mb-6"></div>

                            {/* Blockchain visualization with brand colors */}
                            <div className="relative h-24 w-full">
                              {/* Grid lines */}
                              <div className="absolute inset-0">
                                {[1, 2, 3, 4].map((i) => (
                                  <div key={i} className="absolute w-full h-px bg-steel-dark/20" style={{ top: `${i * 20}%` }}></div>
                                ))}
                              </div>

                              {/* Activity line */}
                              <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
                                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
                                  <path
                                    d="M0,10 L5,12 L10,8 L15,14 L20,10 L25,12 L30,7 L35,9 L40,6 L45,8 L50,4 L55,9 L60,5 L65,11 L70,9 L75,7 L80,11 L85,4 L90,8 L95,6 L100,10"
                                    stroke="rgba(5, 183, 198, 0.7)"
                                    strokeWidth="0.5"
                                    fill="transparent"
                                  />
                                  <path
                                    d="M0,10 L5,12 L10,8 L15,14 L20,10 L25,12 L30,7 L35,9 L40,6 L45,8 L50,4 L55,9 L60,5 L65,11 L70,9 L75,7 L80,11 L85,4 L90,8 L95,6 L100,10 V20 H0 Z"
                                    fill="url(#blueGradient)"
                                    opacity="0.15"
                                  />
                                  <defs>
                                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                      <stop offset="0%" stopColor="rgb(5, 183, 198)" stopOpacity="0.5" />
                                      <stop offset="100%" stopColor="rgb(5, 183, 198)" stopOpacity="0" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>

                              {/* Data points with brand colors */}
                              <div className="absolute bottom-[40%] left-[30%] h-2 w-2 rounded-full bg-primary-legacy shadow-neon"></div>
                              <div className="absolute bottom-[60%] left-[50%] h-2 w-2 rounded-full bg-primary-legacy shadow-neon"></div>
                              <div className="absolute bottom-[30%] left-[70%] h-2 w-2 rounded-full bg-primary-legacy shadow-neon"></div>
                              <div className="absolute bottom-[50%] left-[85%] h-2 w-2 rounded-full bg-accent-legacy shadow-neon"></div>
                            </div>
                          </div>

                          {/* Control panel */}
                          <div className="h-20 bg-space-dark/70 rounded border border-steel-dark/30 p-3 flex items-center justify-between">
                            <div className="h-10 w-32 bg-space-gray/70 rounded border border-primary-legacy/30 flex items-center justify-center">
                              <div className="h-2 w-20 bg-primary-legacy/50 rounded-sm"></div>
                            </div>
                            <div className="h-10 w-32 bg-space-gray/70 rounded border border-steel-DEFAULT/20 flex items-center justify-center">
                              <div className="h-2 w-20 bg-steel-DEFAULT/40 rounded-sm"></div>
                            </div>
                            <div className="h-10 w-32 bg-space-gray/70 rounded border border-accent-legacy/30 flex items-center justify-center">
                              <div className="h-2 w-20 bg-accent-legacy/50 rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated accent elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-neon-blue/10 rounded-full filter blur-xl animate-pulse-glow"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-neon-pink/10 rounded-full filter blur-xl animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;