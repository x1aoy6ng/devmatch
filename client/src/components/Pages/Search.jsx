import Navbar from '../Navbar'
import RoomInfo from '../RoomInfo'
import SortBar from '../SortBar'

const Search = () => {
    return (
        <div className='relative w-full min-h-screen'>
          <Navbar/>
          <SortBar/>
          <RoomInfo/>
        </div>
    )
}

export default Search