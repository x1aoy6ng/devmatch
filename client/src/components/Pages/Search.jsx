import Navbar from '../Navbar'
import RoomDetail from '../RoomDetail'
import SortBar from '../SortBar'

const Search = () => {
    return (
        <div className='w-full min-h-screen'>
          <Navbar/>
          <div className='pt-28 flex'>
          <SortBar/>
          <RoomDetail/>
          </div>
        </div>
    )
}

export default Search