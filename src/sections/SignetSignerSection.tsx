import React from 'react';
import { Button } from '../components/ui/button';

const SignetSignerSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-background-dark" id="signer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-block px-3 py-1 bg-signet-blue/10 rounded-full">
              <span className="text-signet-blue text-sm font-semibold tracking-wider uppercase">
                Signet Signer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The Most Secure Way to Sign Web3 Transactions
            </h2>
            <div className="space-y-4 mb-8 text-gray-300">
              <p>
                Signet uses advanced cryptographic techniques to ensure your private keys never leave your device. Our secure enclave technology provides an additional layer of protection against malware and phishing attacks.
              </p>
              <p>
                With Signet, you get complete visibility into what you&apos;re signing, formatted in a human-readable way, so you can verify exactly what you&apos;re authorizing.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://chrome.google.com/webstore/detail/signet/placeholder" target="_blank" rel="noreferrer">
                <Button size="lg">Download Extension</Button>
              </a>
              <a href="#demo">
                <Button variant="outline" size="lg">Try Demo</Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 shadow-2xl">
              {/* Mockup of Signing Interface */}
              <div className="bg-background-dark p-5 rounded-lg border border-gray-700">
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-white font-medium">Sign Request</div>
                    <div className="flex space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">app.example.com wants you to sign:</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between py-2 px-3 bg-gray-800 rounded">
                    <span className="text-gray-400">From</span>
                    <span className="text-gray-200 font-mono">0x1a2b...3c4d</span>
                  </div>
                  <div className="flex justify-between py-2 px-3 bg-gray-800 rounded">
                    <span className="text-gray-400">Message</span>
                    <span className="text-gray-200">Hello World</span>
                  </div>
                  <div className="flex justify-between py-2 px-3 bg-gray-800 rounded">
                    <span className="text-gray-400">Nonce</span>
                    <span className="text-gray-200 font-mono">0x123456</span>
                  </div>
                  <div className="flex justify-between py-2 px-3 bg-gray-800 rounded">
                    <span className="text-gray-400">Timestamp</span>
                    <span className="text-gray-200">2023-05-17 14:30:45</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 py-2 px-4 bg-transparent border border-gray-600 text-gray-300 rounded hover:bg-gray-800 transition-colors">
                    Reject
                  </button>
                  <button className="flex-1 py-2 px-4 bg-signet-blue text-white rounded hover:bg-signet-dark transition-colors">
                    Sign
                  </button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-signet-blue/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-signet-blue/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignetSignerSection;