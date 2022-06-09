import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { navbar } from '../utils/navbar';
import { Container } from './style';

export const Root = () => {
  return (
    <Container>
      <Navbar/>
      <Routes>
        {navbar.map(({id, path, Element}) => {
          return(
            <Route key={id} path={path} element={Element}/>
          )
        })}
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path='*' element={<div>No Data Found</div>}/>
      </Routes>
    </Container>
  )
}

export default Root;