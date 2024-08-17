const BookingInfoButton = () => {
    const buttonStyles = "flex justify-center items-center border-solid border-black border-2 px-14 rounded-lg py-1";
    const centerStyles = "flex justify-center items-center";
    return (
        
        <div className="w-full flex justify-center items-center gap-10 mt-5">
            
            <div className={centerStyles}>
            <label className="mr-2" htmlFor="package">Package:</label>
            <select className={buttonStyles} name="package" id="package">
                <option value="normal">Normal</option>
                <option value="p-a">Package A</option>
                <option value="p-b">Package B</option>
            </select>
            </div>

           <div className={centerStyles}>
            <label className="mr-2" htmlFor="num-of-tick">Number of Ticket:</label>
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