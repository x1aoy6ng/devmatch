import Navbar from '../Navbar'
import RoomDetail from '../RoomDetail'
import SortBar from '../SortBar'

const Search = () => {
    return (
        <div className='w-full min-h-screen'>
          <Navbar/>
          <SortBar/>
          <RoomDetail/>
        </div>
    )
}

export default Search