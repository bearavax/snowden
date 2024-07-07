import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

// Import the RainbowKitChain type from the correct location
import type { RainbowKitChain } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import { getDefaultConfig, Chain } from '@rainbow-me/rainbowkit';

// Define the Avalanche chain
const avalancheChain: RainbowKitChain = {
  id: 43114,
  name: 'Avalanche',
  network: 'avalanche',
  iconUrl: 'https://example.com/avalanche-icon.svg', // Replace with a valid icon URL
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Avalanche',
    symbol: 'AVAX',
  },
  rpcUrls: {
    default: { 
      http: ['https://api.avax.network/ext/bc/C/rpc'] 
    }, // Public RPC URL
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://snowtrace.io/' },
  },
  testnet: false,
};