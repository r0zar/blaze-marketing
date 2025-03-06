import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const DevelopersSection: React.FC = () => {
  const blazeCodeExample = `// Initialize Blaze SDK
import { BlazeClient } from 'blaze-sdk';

// Create a client instance
const blaze = new BlazeClient({
  apiKey: 'YOUR_API_KEY',
  subnet: 'mainnet'
});

// Create a transaction with instant feedback
const { txId, pendingTx } = await blaze.createTransaction({
  recipient: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  amount: 100,
  memo: 'Payment for services'
});

// Transaction appears instantly in UI
console.log('Pending Transaction:', pendingTx);

// Signet will handle the signing seamlessly
// when the transaction confirms on-chain:
blaze.on('confirmation', (tx) => {
  console.log('Transaction confirmed!', tx);
});`;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-background-dark" id="developers">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-block px-3 py-1 bg-signet-blue/10 rounded-full">
              <span className="text-signet-blue text-sm font-semibold tracking-wider uppercase">
                For Developers
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete Web3 Infrastructure
            </h2>
            <div className="space-y-4 mb-8 text-gray-600 dark:text-gray-400">
              <p>
                Blaze provides a comprehensive infrastructure suite that makes building web3 applications as simple as web2 development.
              </p>
              <p>
                Our ecosystem of tools, including the Signet Extension for seamless signing, works together to create frictionless blockchain applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800/50">
                <CardContent className="p-5">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-signet-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Instant Responsiveness</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">No waiting for blockchain confirmations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800/50">
                <CardContent className="p-5">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-signet-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Full SDK Suite</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Blaze, Signet, Wisdom and more</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800/50">
                <CardContent className="p-5">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-signet-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Starter Templates</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Launch new projects in minutes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800/50">
                <CardContent className="p-5">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-signet-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Seamless Signing</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">With Signet Extension companion</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://docs.blaze.example.com" target="_blank" rel="noreferrer">
                <Button size="lg">View Documentation</Button>
              </a>
              <a href="https://docs.signet.example.com" target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg">Signet Extension Docs</Button>
              </a>
              <a href="https://github.com/blaze/sdk" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg">GitHub Repository</Button>
              </a>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-1 shadow-2xl">
            <div className="flex items-center bg-gray-800 px-4 py-2 rounded-t-lg">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">blaze-sdk-example.js</div>
            </div>
            <pre className="language-javascript bg-gray-900 p-6 rounded-b-lg overflow-auto text-sm">
              <code className="text-gray-300">
                {blazeCodeExample}
              </code>
            </pre>
          </div>
          
          <div className="lg:col-span-2 mt-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Infrastructure Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-signet-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-signet-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Blaze Core Infrastructure</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  The foundation that makes blockchain applications instantly responsive and scalable.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-signet-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-signet-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Specialized SDKs</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Purpose-built toolkits for specific applications like prediction markets (Wisdom) and DeFi (Dexterity).
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-signet-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-signet-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Signet Extension</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  The companion browser extension that brings the user experience of web3 apps the final mile to being indiscernible from web2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;