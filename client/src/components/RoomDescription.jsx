import { FaTicketAlt } from "react-icons/fa"; // Ticket Icon
import { FaCartShopping } from "react-icons/fa6"; // Shopping Cart Icon
import { FaLocationDot } from "react-icons/fa6"; // Location Icon
import { FaCalendarAlt } from "react-icons/fa"; // Calendar Icon

const RoomDescription = () => {
    const ticketNameStyle = "ml-10 font-bold text-pink-700";
    const ticketPriceStyle = "absolute right-32 top-0 ml-10 text-pink-700";
    const hrStyle = "border-dashed border-black/60 border-1 mt-5";
    const packageInfoStyle = "ml-10 mt-2 text-pink-900";

    return (
        <div className="relative w-full flex flex-row mt-10 mb-40">
            <div className="flex flex-col w-3/5 ml-28">
                <div className="flex justify-center items-center border-solid border-black border-2 text-pink-700">
                    <h1 className="text-xl font-bold py-3 pl-5 flex">Jujutsu Kaishen Exhibition -  
                        <FaTicketAlt className="self-center mt-1 mx-1"/> Ticket Information</h1>
                </div>

                <div className="mt-5 border-solid border-black border-2 rounded-lg py-6">
                        <div className="relative">
                        <p className={ticketNameStyle}>Normal &#40;Adult&#41;</p>
                        <p className={ticketPriceStyle}>ETH0.06</p>
                        <hr className={hrStyle}/>
                        </div>
                        
                        <div className="relative">
                        <p className={`mt-5 ${ticketNameStyle}`}>Package A &#40;Adult&#41;</p>
                        <p className={ticketPriceStyle}>ETH0.065</p>
                        <p className={packageInfoStyle}>
                        * Included 1 Admission Ticket 
                        <br/>
                        * Included 1 Wall Scroll Poster
                        <br/>
                        * Redemption at ticket counter upon arrival
                        </p>
                        <hr className={hrStyle}/>
                        </div>
                        
                        <div className="relative">
                        <p className={`mt-5 ${ticketNameStyle}`}>Package B &#40;Adult&#41;</p>
                        <p className={ticketPriceStyle}>ETH0.07</p>
                        <p className={packageInfoStyle}>
                        * Included 1 Admission Ticket
                        <br/>
                        * Included 1 Box Art Crystal Jigsaw
                        <br/>
                        * Included 1 Keychain
                        <br/>
                        * Redemption at ticket counter upon arrival
                        </p>
                        </div>
                </div>
            </div>

            <div className="absolute right-36 top-0 flex flex-col justify-center items-center">
                <div className="bg-blue-600 text-white cursor-pointer font-bold flex justify-center items-center px-14 rounded-lg py-2 hover:bg-blue-500 transition duration-300">
                    Add To Cart <FaCartShopping className="text-center ml-1"/> 
                </div>

                <div className="flex flex-col items-center border-solid border-black border-2 w-full mt-5 rounded-md py-5 text-pink-700">
                    <div className="flex flex-row w-full ml-5 h-full">
                        <FaCalendarAlt className="self-center"/><p className="ml-3">26<small>th</small> October 2024 <br/> 10:00AM</p>
                    </div>

                    <div className="flex flex-row mt-3 w-full ml-5">
                        <FaLocationDot className="mt-1"/><p className="ml-3">168, Jln Bukit Bintang, <br/> Bukit Bintang, <br/>55100 Kuala Lumpur, <br/>Wilayah Persekutuan <br/>Kuala Lumpur</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomDescription