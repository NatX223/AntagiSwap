import ContextProvider from "utils/ContextProvider";
import '@rainbow-me/rainbowkit/styles.css';
import { http } from 'wagmi';
import Script from "next/script";
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  rainbowWallet,
  walletConnectWallet,
  bitgetWallet,
  metaMaskWallet,
  trustWallet
} from '@rainbow-me/rainbowkit/wallets';
import { createConfig } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  Chain
} from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';

const cantoTestnet = {
  id: 7701,
  name: 'Canto Testnet',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Canto', symbol: 'CNT', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://canto-testnet.plexnode.wtf'] },
  },
  blockExplorers: {
    default: { name: 'cantoexplorer', url: 'https://testnet.tuber.build/' },
  },
  testnet: true
};

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, walletConnectWallet, bitgetWallet, trustWallet],
    },
  ],
  {
    appName: 'Antagi',
    projectId: '2b4467b0ed7e948fc9ae1c86611b821b',
  }
);

const config = createConfig({
  chains: [cantoTestnet],
  connectors,
  ssr: true
})

const client = new QueryClient();

const App =  ({ Component, pageProps }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
      <RainbowKitProvider>
        <ContextProvider> 
          <Component {...pageProps} />
        </ContextProvider>
      </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};


export default App;