import Navbar from "../Navbar";
import Footer from "../Footer";
import InventoryCard from "../InventoryCard";

const AccountInventory = () => {
    return (
        <div className="w-full min-h-full">
            <Navbar/>
            <div className='pt-28'>
                <InventoryCard/>
            </div>
            <Footer/>
        </div>
    );
}

export default AccountInventory