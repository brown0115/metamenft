import { useMemo } from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomeView from './views/home'
import ClaimCard from './views/claimCard'
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { CustomWalletProvider } from "./contexts/WalletContext";

function App() {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;
  return (
    <>
      <CustomWalletProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/claim-card" element={<ClaimCard />} />
        </Routes>
      </CustomWalletProvider>
    </>
  );
}

export default App;
