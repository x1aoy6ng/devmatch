import Navbar from '../Navbar'
import RoomDetail from '../RoomDetail'
import SortBar from '../SortBar'
import Footer from '../Footer'
import BackToTopButton from '../BackToTop';

const Search = () => {
    return (
        <div className='w-full min-h-screen'>
          <Navbar/>
          <div className='pt-32 flex mb-40'>
          <SortBar/>
          <RoomDetail/>
          </div>
          <Footer/>
          <BackToTopButton />
        </div>
        
    )
}

export default Search