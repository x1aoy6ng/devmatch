import { useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md'; // Lightmode
import { MdDarkMode } from "react-icons/md"; // Darkmode
import { BsFillTicketDetailedFill } from "react-icons/bs"; // Booking Details
import { FaWallet } from "react-icons/fa6"; // Wallet Icon
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { SiHotelsdotcom } from "react-icons/si";

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
        <nav className="w-full flex items-center justify-between py-5 pl-10 pr-20 fixed bg-neutral-300 shadow-lg z-10">
            <div className="cursor-pointer text-3xl font-bold ml-14 flex">SMTG <SiHotelsdotcom fontSize={30} className={`self-center ${navButton} mx-3`}/> </div>
            <div className="flex items-center">
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