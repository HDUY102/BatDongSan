import { FaSearch   } from 'react-icons/fa'
import Footer from './components/Footer'
import IntroDuce from './components/IntroDuce'
import Property from './components/Property'

export default function Home() {
  return (
    <div>
      <div className='justify-center rounded-none items-center flex ml-60 mt-3 w-96'>
        <input className='border-2 ' type="text" placeholder='Bạn đang muốn tìm gì?' />
        <button className='bg-amber-500 flex border-1 w-24 items-center justify-center rounded-none text-white px-2 py-2'>
              <FaSearch className="mt-1"/>  
        </button>
      </div>
      <IntroDuce/>
      <Property/>
      <Footer/>
    </div>
  )
}
