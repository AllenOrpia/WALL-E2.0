import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CreateImage from './pages/CreateImage'
import { logo } from './assets'



const App = () => {
  return (
   <>
      <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-gray-900 sm:px-8 px-4 py-4 border-b border-b-slate-500 text-white'>
            <Link to={'/'}>
              <p className=' font-extrabold text-2xl'>WALL-E</p>
            </Link>
            <Link to={'/create-image'} className='font-medium text-white bg-red-500 px-4 py-2 rounded-md'>
                Create Image
            </Link>
        </header>
        
        <main className='sm:p-8 px-4 py-8 bg-black w-full min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create-image' element={<CreateImage />}>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
   </>
  )
}

export default App