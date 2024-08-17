import { useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md'; // Lightmode
import { MdDarkMode } from "react-icons/md"; // Darkmode
import { BsFillTicketDetailedFill } from "react-icons/bs"; // Booking Details
import { FaWallet } from "react-icons/fa6"; // Wallet Icon

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
        <nav className="w-full flex items-center justify-between py-3 px-8">
            <div className="cursor-pointer text-3xl font-bold">Logo</div>
            <div className="flex items-center">
                <MdOutlineDarkMode 
                    fontSize={modeSize} 
                    className={`self-center ${navButton} mr-6`} 
                />
                <div className="flex items-center rounded-full px-6 py-3 font-bold bg-black text-white">
                    CONNECT WALLET&ensp;&ensp;<FaWallet fontSize={walletSize}/>
                </div>
            </div>
        </nav>
    );    
}

export default Navbar;