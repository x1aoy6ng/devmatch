import { useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md'; // Lightmode
import { MdDarkMode } from "react-icons/md"; // Darkmode
import { BsFillTicketDetailedFill } from "react-icons/bs"; // Booking Details

const navButton = "mx-4 cursor-pointer"
const Navbar = () => {
    return (
        <nav className="w-full flex flex-row justify-evenly mt-4 relative">
            <div className="absolute top-0 left-20 cursor-pointer">Logo</div>
            <div className="flex flex-row absolute top-0 right-10">
                <MdOutlineDarkMode fontSize={30} className={navButton}/>

                <BsFillTicketDetailedFill fontSize={30} className={navButton}/>
            </div>
        </nav>
    );
}

export default Navbar;