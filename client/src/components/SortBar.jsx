import { CiCirclePlus } from "react-icons/ci"; // Plus Button
import { CiCircleMinus } from "react-icons/ci"; // Minus Button
import { FaBed } from "react-icons/fa"; // Bed Icon
import { FaWifi } from "react-icons/fa"; // Wi-Fi Icon
import { IoIosArrowDown } from "react-icons/io"; // Arrow Down
import { IoIosArrowUp } from "react-icons/io"; // Arrow Up

const SortBar = () => {
    const inputStyles = "relative border-solid border-2 border-black rounded-lg w-24 h-10";
    const buttonStyles = "border-solid border-2 border-black rounded-lg w-24 h-10 flex items-center justify-center mt-5"
    const numOfGuestStyle = "flex flex-row gap-2 items-center my-2";

    return (
        <div className="flex flex-col absolute top-20 left-10 gap-4 border-solid border-2 border-black/30 rounded-xl w-60 p-4">
            <p>Price per night</p>

            <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                    <p>Min</p>
                    <input type="text" className={inputStyles}/>
                </div>
                    

                <div className="flex flex-col">
                    <p>Min</p>
                    <input type="text" className={inputStyles}/>
                </div>
            </div>

            <div>               
                <p>Guest Rating</p>

                <input type="radio" className="cursor-pointer"/>
                <label htmlFor="">  5</label>
                <br/>
                <input type="radio" className="cursor-pointer"/>
                <label htmlFor=""> &gt; 4</label>
                <br/>
                <input type="radio" className="cursor-pointer"/>
                <label htmlFor=""> &gt; 3</label>
                <br/>
            </div>

            <div>
                <div className={buttonStyles}>Hotel</div>

                <div className={buttonStyles}>State</div>

                <div className={buttonStyles}>Sort By</div>    
            </div>

            <div className="mt-2 flex flex-col items-center justify-center">
                <div className={numOfGuestStyle}>
                    <p>Adult</p>
                    <CiCirclePlus id="adult-plus" className="ml-5 cursor-pointer" fontSize={30}/>
                    <p className="text-lg">2</p>
                    <CiCircleMinus id="adult-minus" className="cursor-pointer" fontSize={30}/>
                </div>

                <div className={numOfGuestStyle}>
                    <div>
                    <p>Children</p>
                    <p className="text-xs">Age 0-17</p>
                    </div>
                    <CiCirclePlus id="children-plus" fontSize={30}/>
                    <p className="text-lg">2</p>
                    <CiCircleMinus id="children-minus" fontSize={30}/>
                </div>
            </div>

            <div>
                <div className="rounded-lg w-52 h-10 flex items-center justify-center mt-2 bg-blue-400 text-white font-bold">Search</div>
            </div>
    </div>
    );
}

export default SortBar;