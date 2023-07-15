import { useMemo } from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomeView from './views/home'
import ClaimCard from './views/claimCard'
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

function App() {
// The network can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new GlowWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter()
    ], [network]);

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/claim-card" element={<ClaimCard />} />
            </Routes>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
