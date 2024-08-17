import { FaBed, FaWifi } from "react-icons/fa"; // Bed Icon
import { FaWater } from "react-icons/fa"; // Water Icon
import { Link } from "react-router-dom";

const RoomDetail = () => {
    const iconSize = 30;
    const infoCardStyle = "border-solid border-2 border-black/30 w-full rounded-3xl h-64 flex"; 

    return (
        <div className="flex flex-col items-center mt-1.5 ml-16">
            <div className="w-1/2 flex flex-col gap-5 justify-between">
            <Link to="/room-info">
                <div className={`${infoCardStyle} group`}>
                    <img className="w-1/2 h-full object-cover rounded-l-3xl" src="https://images.trvl-media.com/lodging/1000000/50000/47200/47194/82efec83.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" alt="standardRoom.jpg"/>
                    <div className="p-4 flex flex-col justify-between w-1/2">
                        <div className="">
                            <h2 className="font-bold text-xl">Standard Room</h2>
                            <h2 className="font-bold text-lg mt-1 text-lime-600">The Grand Hotel</h2>
                        </div>
                        <div className="flex flex-row items-center space-x-2 mt-3">
                            <div id="rating" className="border-solid border-black border rounded-xl w-12 h-8 flex justify-center items-center font-bold text-gray-500 bg-green-300">
                                4.6
                            </div>
                            <div id="standard-room-rating" className="hidden group-hover:block"> {/* Hidden by default, shown on hover */}
                                <p className="text-sm">Wonderful</p>
                                <p className="text-sm">25 reviews</p>
                            </div>
                        </div>
                        <div className="space-y-2 mt-3">
                            <div className="flex items-center">
                                <FaBed fontSize={iconSize}/>
                                <p className="ml-3">1 Double bed OR 2 Single Beds</p>
                            </div>
                            <div className="flex items-center">
                                <FaWifi fontSize={iconSize}/>
                                <p className="ml-3">Free Wi-Fi</p>
                            </div>
                        </div>
                        <div className="text-red-600 font-bold text-lg mt-3">
                            ETH 0.05/Night
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/room-info"> 
                <div className={`${infoCardStyle} group`}>
                    <img className="w-1/2 h-full object-cover rounded-l-3xl" src="https://images.trvl-media.com/lodging/1000000/50000/47200/47194/8e6e9989.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" alt="superiorRoom.jpg" />
                    <div className="p-4 flex flex-col justify-between w-1/2">
                        <div>
                            <h2 className="font-bold text-xl">Superior Room</h2>
                            <h2 className="font-bold text-lg mt-1 text-lime-600">The Grand Hotel</h2>
                        </div>
                        <div className="flex flex-row items-center space-x-2 mt-3">
                            <div className="border-solid border-black border rounded-xl w-12 h-8 flex justify-center items-center font-bold text-gray-500 bg-green-300">
                                5.0
                            </div>
                            <div className="hidden group-hover:block">
                                <p className="text-sm">Wonderful</p>
                                <p className="text-sm">34 reviews</p>
                            </div>
                        </div>
                        <div className="space-y-2 mt-3">
                            <div className="flex items-center">
                                <FaBed fontSize={iconSize}/>
                                <p className="ml-3">2 Twin Beds</p>
                            </div>
                            <div className="flex items-center">
                                <FaWater fontSize={iconSize}/>
                                <p className="ml-3">River View</p>
                            </div>
                        </div>
                        <div className="text-red-600 font-bold text-lg mt-3">
                            ETH 0.1/Night
                        </div>
                    </div>
                </div>
            </Link>

            </div>
        </div>
    );
}

export default RoomDetail;
