import React from 'react'
import { Navbar,Market,Home,About,Api,Background } from './components/index.js'
import {Routes,Route} from 'react-router-dom'
import './App.css'


const App = () => {
  const coins = Api()
  return (
    <div className='bg-black overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/market' element={<Market coins={coins}/>}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App