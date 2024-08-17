import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Search from './components/Pages/Search'
import RoomInfo from './components/Pages/RoomInfo'
import AccountInventory from './components/Pages/AccountInventory'
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { OKXWallet } from "@okwallet/aptos-wallet-adapter";
import { Network } from "@aptos-labs/ts-sdk";

export const WalletProvider = ({ children }) => {
  const wallets = [
    new OKXWallet()
  ];
 
  return (
    <AptosWalletAdapterProvider
      plugins={wallets}
      autoConnect={true}
      dappConfig={{ network: Network.MAINNET }}
      onError={(error) => {
    console.log("error", error);
  }}
    >
      <App />
    </AptosWalletAdapterProvider>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/room-info' element={<RoomInfo/>}/>
        <Route path='/inventory' element={<AccountInventory/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default WalletProvider
