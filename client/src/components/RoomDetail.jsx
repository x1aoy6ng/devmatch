import { Link } from "react-router-dom";
import { MdEventSeat } from "react-icons/md"; // Seat Icon
import { FaLocationDot } from "react-icons/fa6"; // Location Icon

const RoomDetail = () => {
    const iconSize = 30;
    const infoCardStyle = "border-solid border-2 border-black/30 rounded-3xl h-64 flex"; 

    return (
        <div className="flex flex-col items-center ml-28">
            <div className="w-full flex flex-col gap-10 justify-between">
                <Link to="/room-info">
                    <div className={infoCardStyle}>
                        <img className="w-1/2 h-full object-cover rounded-l-3xl" src="/src/assets/img/jujutsukaisen.jpg" alt="standardRoom.jpg"/>
                        <div className="p-4 flex flex-col justify-between w-1/2">
                            <div>
                                <h2 className="font-bold text-xl">Jujutsu Kaishen Exhibition</h2>
                                <h2 className="font-bold text-lg mt-1 text-lime-600">26 October 2024</h2>
                            </div>

                            <div className="space-y-2 mt-3">
                                <div className="flex items-center">
                                    <MdEventSeat fontSize={iconSize}/>
                                    <p className="ml-3">SEAT 332</p>
                                </div>
                                <div className="flex items-center">
                                    <FaLocationDot fontSize={iconSize}/>
                                    <p className="ml-3">Pavilion, Bukit Bintang</p>
                                </div>
                            </div>
                            <div className="text-red-600 font-bold text-lg mt-3">
                                Starts From ETH 0.06/Ticket
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/room-info"> 
                    <div className={infoCardStyle}>
                        <img className="w-1/2 h-full object-cover rounded-l-3xl" src="/src/assets/img/fullmetal.jpg" alt="superiorRoom.jpg" />
                        <div className="p-4 flex flex-col justify-between w-1/2">
                            <div>
                                <h2 className="font-bold text-xl">Fullmetal Alchemist Exhibition</h2>
                                <h2 className="font-bold text-lg mt-1 text-lime-600">12 November 2024</h2>
                            </div>
                            <div className="space-y-2 mt-3">
                                <div className="flex items-center">
                                    <MdEventSeat fontSize={iconSize}/>
                                    <p className="ml-3">SEAT 118</p>
                                </div>
                                <div className="flex items-center">
                                    <FaLocationDot fontSize={iconSize}/>
                                    <p className="ml-3">Mid Valley, Kuala Lumpur</p>
                                </div>
                            </div>
                            <div className="text-red-600 font-bold text-lg mt-3">
                                Starts From ETH 0.05/Ticket
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default RoomDetail;
