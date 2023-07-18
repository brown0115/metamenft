import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { createContext, useContext, useState, useEffect, useMemo } from 'react';

export const WalletContext = createContext();

export const CustomWalletProvider = (props) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    console.log("endpoint=", endpoint);
    const walletAdapter = new PhantomWalletAdapter();

    const [connected, setConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const [wallet, setWallet] = useState(null);

    const connectWallet = async() => {
        await walletAdapter.connect();
        console.log("walletAdapter=", walletAdapter)
        setConnected(true);
        setWallet(walletAdapter);
        setWalletAddress(walletAdapter.publicKey.toBase58());
    }

    const disconnectWallet = async() => {
        walletAdapter.disconnect();
        setConnected(false);
        setWalletAddress("");
        setWallet(null);
    }

    return (
        <WalletContext.Provider value={{connectWallet, disconnectWallet, connected, endpoint, walletAddress, wallet}}>
            {props.children}
        </WalletContext.Provider>
    )
}

export const useCustomWallet = () => {
    const walletManager = useContext(WalletContext);
    return walletManager || [{}, async () => { }]
}