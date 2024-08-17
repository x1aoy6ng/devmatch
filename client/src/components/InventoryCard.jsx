import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

const InventoryCard = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl text-red-700">Your NFT Ticket</h1>
            <div className="w-4/5 h-1/2 mt-10 mb-40 border-2 border-black border-solid p-10 rounded-lg">
                <div className="w-64 flex flex-col border-2 border-black border-solid pb-24 rounded-md"> 
                    <img className='rounded-t-md' src="https://i.scdn.co/image/ab67616d0000b27312fc853d36215f51c478e2d9" alt="" />

                    <div>
                        <p>Name:</p>

                        <p>Description:</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventoryCard