import { IoIosArrowDown } from "react-icons/io"; // Arrow Down
import { IoIosArrowUp } from "react-icons/io"; // Arrow Up
import { FaFilter } from "react-icons/fa";

const SortBar = () => {
    const inputStyles = "border border-gray-300 rounded-lg w-full h-10 px-3 text-sm placeholder-gray-500";
    const buttonStyles = "border border-gray-300 rounded-lg w-full h-10 flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200";
    const sectionTitleStyles = "flex items-center gap-2 text-lg font-semibold text-gray-700 mt-2";
    const separatorStyles = "border-t border-gray-300 my-4 mb-1";

    return (
        <div className="flex flex-col ml-20 gap-6 border border-gray-300 rounded-2xl w-60 p-4 shadow-xl">
            <div className={sectionTitleStyles}>
                <FaFilter size={20} className="text-blue-500"/>
                <span>Filter Options</span>
            </div>

            <div className={separatorStyles}></div>

            <p className="text-lg font-semibold text-gray-700">Price per ticket</p>

            <div className="flex flex-row gap-2">
                <div className="flex flex-col flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-1">Min</p>
                    <input type="text" placeholder=" ETH" className={inputStyles}/>
                </div>
                    
                <div className="flex flex-col flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-1">Max</p>
                    <input type="text" placeholder=" ETH" className={inputStyles}/>
                </div>
            </div>

            <div className="space-y-2 font-medium">
                <div className={buttonStyles}>Seat</div>
                <div className={buttonStyles}>Artist</div>
                <div className={buttonStyles}>Sort By</div>    
            </div>

            <div className="flex justify-center mt-2">
                <div className="rounded-lg w-full h-10 flex items-center justify-center bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors duration-200 cursor-pointer tracking-wider">SEARCH</div>
            </div>
        </div>
    );
}

export default SortBar;