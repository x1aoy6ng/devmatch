
import { IoIosArrowDown } from "react-icons/io"; // Arrow Down
import { IoIosArrowUp } from "react-icons/io"; // Arrow Up

const SortBar = () => {
    const inputStyles = "relative border-solid border-2 border-black rounded-lg w-24 h-10";
    const buttonStyles = "border-solid border-2 border-black rounded-lg w-24 h-10 flex items-center justify-center mt-5"

    return (
        <div className="flex flex-col ml-20 gap-4 border-solid border-2 border-black/30 rounded-xl w-60 p-4">
            <p>Price per ticket</p>

            <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                    <p>Min</p>
                    <input type="text" placeholder=" ETH" className={inputStyles}/>
                </div>
                    
                <div className="flex flex-col">
                    <p>Max</p>
                    <input type="text" placeholder=" ETH" className={inputStyles}/>
                </div>
            </div>

            <div>
                <div className={buttonStyles}>Seat</div>

                <div className={buttonStyles}>Artist</div>

                <div className={buttonStyles}>Sort By</div>    
            </div>

            <div>
                <div className="rounded-lg w-52 h-10 flex items-center justify-center mt-2 bg-blue-400 text-white font-bold">Search</div>
            </div>
        </div>
    );
}

export default SortBar;
