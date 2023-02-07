import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #FFFFFF;
height: 50px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1200px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 120%;
cursor: pointer;
&.active {
    background: #282c34;
	color: #fff;
    padding: 0 1rem;
	text-shadow: 0 0 10px #000, 0 0 20px #000, 0 0 40px #000; 

}
&:hover {
	transition: all 0.3s ease-in-out;
	background: #282c34;
	color: #fff;
	text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff; 
	// height: 100%;
	// cursor: pointer;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 10px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 50px;
background: #282c34;
padding: 7px 40px;
color: #fff;
outline: none;
border: 1px solid gray;
cursor: pointer;
transition: all 0.5s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.3s ease-in-out;
	background: #fff;
	color: #808080;
}
`;


// h1 span {
// 	transition: 0.5s ease-out;
//   }
//   h1:hover span:nth-child(1) {
// 	margin-right: 5px;
//   }
//   h1:hover span:nth-child(1):after {
// 	content: "'";
//   }
//   h1:hover span:nth-child(2) {
// 	margin-left: 30px;
//   }
//   h1:hover span {
// 	color: #fff;
// 	text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
//   }