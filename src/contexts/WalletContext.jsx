import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

export const WalletContext = createContext();

export const CustomWalletProvider = (props) => {
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
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <WalletContext.Provider value={{}}>
                        {props.children}
                    </WalletContext.Provider>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export const useCustomWallet = () => {
    const walletManager = useContext(WalletContext);
    return walletManager || [{}, async () => { }]
}