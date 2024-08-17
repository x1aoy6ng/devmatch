import Navbar from '../Navbar'
import RoomImage from '../RoomImage'
import BookingInfoButton from '../BookingInfoButton';
import BookingDescription from '../RoomDescription';

const RoomInfo = () => {
    return(
        <div className='w-full'>
            <Navbar/>
            <div className='pt-28'>
                <RoomImage/>
            </div>
            <BookingInfoButton/>
            <BookingDescription/>
        </div>
    );
}

export default RoomInfo