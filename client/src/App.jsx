import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CreateImage from './pages/CreateImage'
import { logo } from './assets'


const App = () => {
  return (
   <>
      <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-slate-200'>
            <Link to={'/'}>
              <img src={logo} alt="logo" className='w-28 object-contain'/>
            </Link>
            <Link to={'/create-image'} className='font-medium text-white bg-purple-500 px-4 py-2 rounded-md'>
                Create Image
            </Link>
        </header>
        <main className='sm:p-8 px-4 py-8 bg-slate-100 w-full min-h-[calc(100vh-73px)]'>
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