import Navbar from '../Navbar'
import RoomImage from '../RoomImage'
import BookingInfoButton from '../BookingInfoButton';
import BookingDescription from '../RoomDescription';
import Footer from '../Footer';

const RoomInfo = () => {
    return(
        <div className='w-full min-h-screen'>
            <Navbar/>
            <div className='pt-28'>
                <RoomImage/>
            </div>
            <BookingInfoButton/>
            <BookingDescription/>
            <Footer />
        </div>
    );
}

export default RoomInfo