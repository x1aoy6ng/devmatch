import { useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md'; // Lightmode
import { MdDarkMode } from "react-icons/md"; // Darkmode
import { BsFillTicketDetailedFill } from "react-icons/bs"; // Booking Details
import { FaWallet } from "react-icons/fa6"; // Wallet Icon

const navButton = "mx-4 cursor-pointer"
const buttonSize = 30;
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
        <nav className="w-full flex flex-row justify-evenly">
            <div className="absolute top-0 left-20 cursor-pointer">Logo</div>
            <div className="flex flex-row absolute top-0 right-10">
                <MdOutlineDarkMode fontSize={buttonSize} className={navButton}/>

                <div className='flex flex-row rounded-lg p-1.5 font-bold bg-blue-400 text-white ml-4'>
                    Connect Wallet&ensp;<FaWallet fontSize={buttonSize}/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;