import Navbar from '../Navbar'
import RoomInfo from '../RoomDetail'
import SortBar from '../SortBar'

const Search = () => {
    return (
        <div className='w-full min-h-screen'>
          <Navbar/>
          <SortBar/>
          <RoomInfo/>
        </div>
    )
}

export default Search