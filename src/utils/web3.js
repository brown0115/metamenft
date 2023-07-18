import { Connection, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { toast } from "react-toastify";

export const sendSol = async (endpoint, wallet, sender, receiver) => {
    try {
        console.log("endpoint=", endpoint);
        console.log("wallet=", wallet);
        console.log("sender=", sender);
        const amountToSend = 100000000; // 0.1 sol
        const connection = new Connection(endpoint)
    
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: new PublicKey(sender),
                toPubkey: new PublicKey(receiver),
                lamports: amountToSend
            })
        )
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        transaction.feePayer = new PublicKey(sender);
        
        let signedTx;

        try {
            signedTx = await wallet.signTransaction(transaction);
        } catch {
            console.log("Wallet Sign Message Error");
            return {
                success: false,
                message: "User rejected the transaction."
            };
        }

        const rawTx = signedTx.serialize();
        console.log("Sending tx....");
        toast.info("Sending sol...");
        const txid = await connection.sendRawTransaction(
            rawTx,
            {
                skipPreflight: true,
                preflightCommitment: "processed"
            }
        );
        console.log("txid=", txid);
        return {
            success: true,
            data: txid
        };
        // const signedTx = await wallet.signTransaction(transaction);
        // console.log("signedTx=", signedTx)
        // const txResult = await sendAndConfirmTransaction(connection, signedTx);
        // const txResult = await wallet.sendTransaction(transaction, connection);
        // await connection.confirmTransaction(txResult, 'processed');
        // console.log("Transaction successful:", txResult);
    } catch(error) {
        console.log("error=", error)
        return {
            success: false,
            message: "Unexpected error"
        }
    }
}