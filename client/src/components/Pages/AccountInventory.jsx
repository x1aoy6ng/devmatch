import Navbar from "../Navbar";
import Footer from "../Footer";
import InventoryCard from "../InventoryCard";
import BackToTopButton from '../BackToTop';

const AccountInventory = () => {
    return (
        <div className="w-full min-h-full">
            <Navbar/>
            <div className='pt-28'>
                <InventoryCard/>
            </div>
            <Footer/>
            <BackToTopButton />
        </div>
    );
}

export default AccountInventory