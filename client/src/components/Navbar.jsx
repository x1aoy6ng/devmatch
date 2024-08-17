import { useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md'; // Lightmode
import { MdDarkMode } from "react-icons/md"; // Darkmode
import { BsFillTicketDetailedFill } from "react-icons/bs"; // Booking Details
import { FaWallet } from "react-icons/fa6"; // Wallet Icon
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";

const navButton = "cursor-pointer"
const modeSize = 30;
const walletSize = 24;
const Navbar = () => {
    //TODO: Implement Dark Theme
    /*const setDarkMode = () => {
        document.querySelector("div").setAttribute("data-theme", "dark");
    }

    const setLightMode = () => {
        document.querySelector("div").setAttribute("data-theme", "light");
    }

    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode();
    }*/

    return (
        <nav className="w-full flex items-center justify-between relative">
            <div className="absolute top-5 left-20 cursor-pointer text-3xl font-bold">Logo</div>
            <div className="flex items-center absolute top-5 right-10">
                <MdOutlineDarkMode 
                    fontSize={modeSize} 
                    className={`self-center ${navButton} mr-6`} 
                />
                <WalletSelector />
            </div>
        </nav>
    );    
}

export default Navbar;