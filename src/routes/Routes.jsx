import { Route,Routes } from 'react-router-dom';
import React from 'react'
import HomePage from '../pages/HomePage'

const Routepage = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default Routepage
