import { FaBed, FaWifi, FaWater } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import { MdEventSeat } from "react-icons/md"; // Seat Icon
import { FaLocationDot } from "react-icons/fa6"; // Location Icon

const RoomDetail = () => {
    const iconSize = 30;
    const infoCardStyle = "border-solid border-2 border-black/30 rounded-3xl h-64 flex"; 

    return (
        <div className="flex flex-col items-center ml-16">
            <div className="w-full flex flex-col gap-5 justify-between">
                <Link to="/room-info">
                    <div className={infoCardStyle}>
                        <img className="w-1/2 h-full object-cover rounded-l-3xl" src="https://images.trvl-media.com/lodging/1000000/50000/47200/47194/82efec83.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" alt="standardRoom.jpg"/>
                        <div className="p-4 flex flex-col justify-between w-1/2">
                            <div>
                                <h2 className="font-bold text-xl">Standard Room</h2>
                                <h2 className="font-bold text-lg mt-1 text-lime-600">VIP Tickets</h2>
                            </div>

                            <div className="space-y-2 mt-3">
                                <div className="flex items-center">
                                    <MdEventSeat fontSize={iconSize}/>
                                    <p className="ml-3">SEAT 332</p>
                                </div>
                                <div className="flex items-center">
                                    <FaLocationDot fontSize={iconSize}/>
                                    <p className="ml-3">Stadium Bukit Jalil</p>
                                </div>
                            </div>
                            <div className="text-red-600 font-bold text-lg mt-3">
                                ETH 0.05/Ticket
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/room-info"> 
                    <div className={infoCardStyle}>
                        <img className="w-1/2 h-full object-cover rounded-l-3xl" src="https://images.trvl-media.com/lodging/1000000/50000/47200/47194/8e6e9989.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" alt="superiorRoom.jpg" />
                        <div className="p-4 flex flex-col justify-between w-1/2">
                            <div>
                                <h2 className="font-bold text-xl">Superior Room</h2>
                                <h2 className="font-bold text-lg mt-1 text-lime-600">Normal Tickets</h2>
                            </div>
                            <div className="space-y-2 mt-3">
                                <div className="flex items-center">
                                    <MdEventSeat fontSize={iconSize}/>
                                    <p className="ml-3">SEAT 118</p>
                                </div>
                                <div className="flex items-center">
                                    <FaLocationDot fontSize={iconSize}/>
                                    <p className="ml-3">Axiata Arena</p>
                                </div>
                            </div>
                            <div className="text-red-600 font-bold text-lg mt-3">
                                ETH 0.1/Ticket
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default RoomDetail;
