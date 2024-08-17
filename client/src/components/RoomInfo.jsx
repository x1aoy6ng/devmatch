import { FaBed } from "react-icons/fa"; // Bed Icon
import { FaWifi } from "react-icons/fa"; // Wi-Fi Icon

const RoomInfo = () => {
    const infoCardStyle = "border-solid border-2 border-black/30 rounded-3xl w-1/2 h-52 absolute right-96"
    return (
        <div className="flex flex-col gap-2 justify-between">
            <div className={`top-20 flex flex-row ${infoCardStyle}`}> 
              <img className="absolute left-0 h-full rounded-l-3xl" src="https://images.trvl-media.com/lodging/1000000/50000/47200/47194/82efec83.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" alt="standardRoom.jpg" />

              <div className="absolute h-full w-1/2 right-5 flex flex-col">
                <div className="flex flex-row">
                    <h2 className="font-bold mt-3">Standard Room</h2>
                    <h2 className="font-bold text-lg mt-2 ml-4 text-lime-600">The Grand Hotel</h2>
                </div>

                <div className="flex flex-row mt-3">
                    <div className="border-solid border-black border rounded-xl w-12 h-8 flex justify-center items-center font-bold text-gray-500 bg-green-300 mt-3">
                        5.0
                    </div>

                    <div className="flex flex-col ml-2">
                        <p>Wonderful</p>
                        <p>25 reviews</p>
                    </div>
                </div>
              </div>
            </div>

            <div className={`top-96 ${infoCardStyle}`}>
                
            </div>
        </div>
    );
}

export default RoomInfo;