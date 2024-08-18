import React from 'react';

const BookingInfoButton = () => {
    const containerStyles = "w-full flex justify-center items-center gap-10 mt-8";
    const selectStyles = "bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    const labelStyles = "text-gray-700 font-semibold mr-4 text-lg";

    return (
        <div className={containerStyles}>
            {/* Package Selection */}
            <div className="flex items-center gap-4 mr-10">
                <label className={labelStyles} htmlFor="package">Package:</label>
                <select className={selectStyles} name="package" id="package">
                    <option value="normal">Normal</option>
                    <option value="p-a">Package A</option>
                    <option value="p-b">Package B</option>
                </select>
            </div>

            {/* Number of Tickets Selection */}
            <div className="flex items-center gap-4">
                <label className={labelStyles} htmlFor="seatNumber">Number of Tickets:</label>
                <select className={selectStyles} name="seatNumber" id="seatNumber">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
    );
}

export default BookingInfoButton;
