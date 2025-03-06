import React from 'react';

const AboutSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'rozar.btc',
      role: 'Founder & Developer',
      image: '/images/happy-welsh.png',
      bio: 'Building bridges between web3 capabilities and web2 user experiences.'
    }
  ];

  const ecosystemProducts = [
    {
      name: 'Blaze SDK',
      description: 'Core infrastructure making web3 apps instantly responsive with security and developer simplicity.'
    },
    {
      name: 'Signet Extension',
      description: 'Companion browser extension for secure, frictionless transaction signing.'
    },
    {
      name: 'Signet SDK',
      description: 'Bridge between web apps and cryptographic operations for secure signing.'
    },
    {
      name: 'Blaze Template',
      description: 'Turnkey starter kit for building web3 applications with web2-like experiences.'
    },
    {
      name: 'Wisdom SDK',
      description: 'Backend infrastructure for building prediction market applications.'
    },
    {
      name: 'Dexterity SDK',
      description: 'Developer-friendly toolkit for DeFi applications with optimal UX.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-6 inline-block px-3 py-1 bg-signet-blue/10 rounded-full">
            <span className="text-signet-blue text-sm font-semibold tracking-wider uppercase">
              Our Ecosystem
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Making Blockchain Invisible
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Blaze exists to make blockchain technology invisible to end users while maintaining all its benefits. 
            Our mission is to make web3 applications indistinguishable from web2 in user experience, 
            while preserving the security, transparency, and ownership benefits of blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {ecosystemProducts.map((product, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-signet-blue">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                The Blaze ecosystem began with a simple vision: what if blockchain applications could be as easy to use as traditional web applications?
              </p>
              <p>
                We identified that transaction signing was the major UX bottleneck in web3 applications, creating friction and confusion for users. Signet was developed as a companion extension to solve this critical last-mile problem.
              </p>
              <p>
                Today, Blaze has grown into a comprehensive infrastructure suite that enables developers to build web3 applications that are indistinguishable from web2 in their user experience.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">Core Principles</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Lightning speed</li>
                <li>Developer simplicity</li>
                <li>Security without friction</li>
                <li>Progressive disclosure</li>
                <li>Web2 experience standards</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
              <p className="text-gray-600 dark:text-gray-400">
                We're setting the gold standard for web3 application interfaces and infrastructure, making Blaze the default choice for forward-thinking developers building the next generation of applications.
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl col-span-2">
              <h4 className="text-xl font-semibold mb-2">The Blaze Difference</h4>
              <p className="text-gray-600 dark:text-gray-400">
                While other solutions focus on isolated components, Blaze provides a complete ecosystem of tools that work together seamlessly. Signet Extension is the companion that brings the user experience of web3 apps the final mile to being indiscernible from traditional web2 apps.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-1"
            >
              {/* Replace with next/image in a real project */}
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                <p className="text-signet-blue text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;