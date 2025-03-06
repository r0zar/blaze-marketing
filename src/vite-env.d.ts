/// <reference types="vite/client" />

// Type definitions for Signet extension API
interface Window {
  SignetAPI: {
    signStructuredData: (data: any) => Promise<{
      signature: string;
      message: any;
      timestamp: number;
      status: 'completed' | 'rejected' | 'failed';
    }>;
  };
  
  // Global extension markers
  SIGNET_EXTENSION_INSTALLED?: boolean;
  signetEventListenerRegistered?: boolean;
  
  // Extension notification functions
  signetShowSuccess?: (title: string, message: string) => void;
  signetShowError?: (title: string, message: string) => void;
  signetShowInfo?: (title: string, message: string) => void;
}