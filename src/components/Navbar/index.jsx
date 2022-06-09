import React from 'react'
import { NavLink } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { Container } from './style';

export const Navbar = () => {
  return (
    <Container>
      {navbar.map(({id, path, title}) => {
        return (
          <NavLink key={id} to={path}>{title}</NavLink>
        )
      })}
    </Container>
  )
}

export default Navbar;