/* eslint-disable no-console */
/* eslint-disable max-len */

/**
 * This example shows how to use the Aptos client to mint and transfer a Digital Asset.
 */

import * as dotenv from "dotenv";
import { Account, AccountAddress, Aptos, AptosConfig, Ed25519PrivateKey, Network, NetworkToNetworkName } from "@aptos-labs/ts-sdk";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
const INITIAL_BALANCE = 100_000_000;

// Setup the client
const APTOS_NETWORK : Network = Network.DEVNET;
const config = new AptosConfig({ network: APTOS_NETWORK });
const aptos = new Aptos(config);
const example = async (account) => { 
    if(account == null) {
      alert("Please Login Your Account");
    } else {
      console.log(account);

      // Seller and buyer account
  const privateKey = new Ed25519PrivateKey("0x840ffe65166a5eb90b5709d3be679d57bf25981521e40954460a876a579f25d3");
  const address = AccountAddress.from("67e2ab960b69f0305a0e9e9d7b8ae49aa361453a2fe9eabce2b0ffb01977097f");
  const seller = Account.fromPrivateKey({privateKey});
  const buyer = Account.generate();
  await aptos.fundAccount({
    accountAddress: account.address,
    amount: 5_000_000,
  });

  const balance = await aptos.getAccountAPTAmount({
    accountAddress : account.address
  }); 

  const transaction = await aptos.transferCoinTransaction({
    sender: account.address,
    recipient: seller.accountAddress,
    amount: 6_000_000,
  });
  
  let pendingTxn = await aptos.signAndSubmitTransaction({
    signer: buyer,
    transaction,
  });
  // Uncomment if wish to view seller address
  // console.log(`Seller's address is: ${seller.accountAddress}`);

  // Fund and create the accounts
  /*await aptos.fundAccount({
    accountAddress: seller.accountAddress,
    amount: INITIAL_BALANCE,
  });
  await aptos.fundAccount({
    accountAddress: buyer.accountAddress,
    amount: INITIAL_BALANCE,
  });
  */

  const collectionName = "Jujutsu Kaisen Exhibition Ticket Collection";
  const collectionDescription = "Come and view the Jujutsu Kaisen Exhibition, where you can enjoy things about Jujutsu Kaisen.";
  const collectionURI = "aptos.dev";

  // Uncomment if new seller address
  /* 
  // Create the collection
  const createCollectionTransaction = await aptos.createCollectionTransaction({
    creator: alice,
    description: collectionDescription,
    name: collectionName,
    uri: collectionURI,
  });

  let committedTxn = await aptos.signAndSubmitTransaction({ signer: alice, transaction: createCollectionTransaction });
  let pendingTxn = await aptos.waitForTransaction({ transactionHash: committedTxn.hash }); 
  console.log("The pendingTxn is" + pendingTxn.hash);
  
  
  pendingTxn = await aptos.waitForTransaction({ transactionHash: "0x5fcabfc2fe0c928333a149afb267198b8d0b651ab06d75d0a525efbb1c916894"});

  const sellerCollection = await aptos.getCollectionData({
    creatorAddress: seller.accountAddress,
    collectionName,
    minimumLedgerVersion: BigInt(pendingTxn.version),
  });

  // NFT
  const tokenName = "Jujutsu Kaisen Exhibition Ticket";
  const tokenDescription = "Exhibition Ticket: ";
  const tokenURI = "aptos.dev/asset";

  const mintTokenTransaction = await aptos.mintDigitalAssetTransaction({
    creator: seller,
    collection: collectionName,
    description: tokenDescription,
    name: tokenName,
    uri: tokenURI,
  });

  let committedTxn = await aptos.signAndSubmitTransaction({ signer: seller, transaction: mintTokenTransaction });
  pendingTxn = await aptos.waitForTransaction({ transactionHash: committedTxn.hash });

  const sellerDigitalAsset = await aptos.getOwnedDigitalAssets({
    ownerAddress: seller.accountAddress,
    minimumLedgerVersion: BigInt(pendingTxn.version),
  });

  const transferTransaction = await aptos.transferDigitalAssetTransaction({
    sender: seller,
    digitalAssetAddress: sellerDigitalAsset[0].token_data_id,
    recipient: buyer.accountAddress,
  });

  committedTxn = await aptos.signAndSubmitTransaction({ signer: seller, transaction: transferTransaction });
  pendingTxn = await aptos.waitForTransaction({ transactionHash: committedTxn.hash });

  const alicesDigitalAssetsAfter = await aptos.getOwnedDigitalAssets({
    ownerAddress: seller.accountAddress,
    minimumLedgerVersion: BigInt(pendingTxn.version),
  });
  console.log(`Alices's digital assets balance: ${alicesDigitalAssetsAfter.length}`);

  const bobDigitalAssetsAfter = await aptos.getOwnedDigitalAssets({
    ownerAddress: buyer.accountAddress,
    minimumLedgerVersion: BigInt(pendingTxn.version),
  });
  console.log(`Bob's digital assets balance: ${bobDigitalAssetsAfter.length}`);
  */
    }
  
};

export default example