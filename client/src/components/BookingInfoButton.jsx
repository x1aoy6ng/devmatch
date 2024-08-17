const BookingInfoButton = () => {
    const buttonStyles = "border-solid border-black border-2 px-14 rounded-lg py-1";
    return (
        
        <div className="w-full flex justify-evenly mt-5">
            
            <div>
            <label className="mr-2" htmlFor="seatLocation">Seat Location:</label>
            <select className={buttonStyles} name="seatNumber" id="seatNumber">
                <option value="118">118</option>
                <option value="329">329</option>
                <option value="451">451</option>
            </select>
            </div>
           
           <div className="flex">
           <label className="mr-2" htmlFor="date">Date:</label>
            <div className={buttonStyles}>
                26th October 2024
            </div>
           </div>

           <div>
            <label className="mr-2" htmlFor="num-of-seat">Number of Seat:</label>
            <select className={buttonStyles} name="seatNumber" id="seatNumber">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 </option>
            </select>
            </div>
        </div>
    );
}

export default BookingInfoButton