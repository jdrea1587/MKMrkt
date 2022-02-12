import React from 'react';
import { Nav, NavLogo, NavLink, Bars, NavMenu } from './NavbarElements';
import styled from 'styled-components';
import logo from './assets/marioLogo.jpeg';

const StyledLogo = styled.img`
    width: 50px;
    height: 50px;
    margin: 10px;
    padding: 3px;
    border: 3px solid black;
    @media (max-width: 500px) {
        font-size: 1rem;
`;

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLogo to='/'>
					<StyledLogo src={logo} />{' '}
				</NavLogo>{' '}
				<Bars />
				<NavMenu>
					<NavLink to='/'> Home </NavLink> <NavLink to='/about'> About </NavLink>{' '}
					<NavLink to='/cart'> Cart </NavLink>{' '}
				</NavMenu>{' '}
			</Nav>{' '}
		</>
	);
};
export default Navbar;
