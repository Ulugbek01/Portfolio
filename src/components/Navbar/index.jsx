import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { activeStyle, Container, Header, Logo, SiteNav } from './style';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <Container>
        <Logo onClick={()=> navigate('/home')}>
          <Logo.Title>Duvlanov</Logo.Title>
        </Logo>
        <SiteNav>
          {navbar.map(({id, path, title}) => {
            return (
                <NavLink key={id} to={path} style={activeStyle}>{title}</NavLink>
              )
            })}
        </SiteNav>
      </Container>
    </Header>
  )
}

export default Navbar;