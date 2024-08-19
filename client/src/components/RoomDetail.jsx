import { Link } from "react-router-dom";
import { MdEventSeat } from "react-icons/md"; // Seat Icon
import { FaLocationDot } from "react-icons/fa6"; // Location Icon

const RoomDetail = () => {
    const iconSize = 30;
    const infoCardStyle = "rounded-3xl h-64 flex shadow-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl"; 

    return (
        <div className="flex flex-col items-center px-4 py-8 ml-20">
            <div className="w-full max-w-4xl flex flex-col gap-8">
                <Link to="/room-info">
                    <div className={infoCardStyle}>
                        <img className="w-1/2 h-full object-cover" src="/src/assets/img/jujutsukaisen.jpg" alt="Jujutsu Kaishen Exhibition"/>
                        <div className="p-6 flex flex-col justify-between w-1/2 bg-slate-200">
                            <div>
                                <h2 className="font-bold text-2xl mb-1">Jujutsu Kaishen Exhibition</h2>
                                <h2 className="font-semibold text-lg text-lime-600">26 October 2024</h2>
                            </div>

                            <div className="space-y-2 mt-4">
                                <div className="flex items-center">
                                    <MdEventSeat fontSize={iconSize} className="text-gray-700"/>
                                    <p className="ml-3 text-gray-700">SEAT 332</p>
                                </div>
                                <div className="flex items-center">
                                    <FaLocationDot fontSize={iconSize} className="text-gray-700"/>
                                    <p className="ml-3 text-gray-700">Pavilion, Bukit Bintang</p>
                                </div>
                            </div>
                            <div className="text-red-600 font-bold text-lg mt-3">
                                Starts from APT 0.06 / ticket
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/room-info"> 
                    <div className={infoCardStyle}>
                        <img className="w-1/2 h-full object-cover" src="/src/assets/img/fullmetal.jpg" alt="Fullmetal Alchemist Exhibition"/>
                        <div className="p-6 flex flex-col justify-between w-1/2 bg-slate-200">
                            <div>
                                <h2 className="font-bold text-2xl mb-1">Fullmetal Alchemist Exhibition</h2>
                                <h2 className="font-semibold text-lg text-lime-600">12 November 2024</h2>
                            </div>
                            <div className="space-y-2 mt-4">
                                <div className="flex items-center">
                                    <MdEventSeat fontSize={iconSize} className="text-gray-700"/>
                                    <p className="ml-3 text-gray-700">SEAT 118</p>
                                </div>
                                <div className="flex items-center">
                                    <FaLocationDot fontSize={iconSize} className="text-gray-700"/>
                                    <p className="ml-3 text-gray-700">Mid Valley, Kuala Lumpur</p>
                                </div>
                            </div>
                            <div className="text-red-600 font-bold text-lg mt-3">
                                Starts from APT 0.05 / ticket
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default RoomDetail;