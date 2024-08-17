const RoomImage = () => {
    return (
        <div className="w-screen flex justify-center items-center">
            <div className="rounded-lg border-1 border-solid border-black w-5/6 h-92 relative overflow-hidden">
                <div className="w-full h-full relative flex">
                    <img className="w-1/2 h-full object-cover" src="https://images.trvl-media.com/lodging/1000000/50000/47200/47194/01401c78.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="pool.jpg" />

                    <div className="absolute w-1/4 right-1/4 top-1/2 transform -translate-y-1/2 flex flex-col">
                        <div className="flex flex-row">
                            <img className="object-cover" src="https://images.trvl-media.com/lodging/1000000/50000/47200/47194/f44b2043.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="" />
                            <img className="bject-cover" src="https://images.trvl-media.com/lodging/1000000/50000/47200/47194/6bafdfd6.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="" />
                        </div>

                        <div className="flex flex-row ">
                            <img className="object-cover" src="https://images.trvl-media.com/lodging/1000000/50000/47200/47194/2c286d78.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="" />
                            <img className="object-cover" src="https://images.trvl-media.com/lodging/1000000/50000/47200/47194/73ea1d82.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomImage;
