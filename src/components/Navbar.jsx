import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../images/logo.png";

// Main navigation container
const NavMain = styled.nav`
  padding: 40px 250px;
  margin-bottom: 20px;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding: 10px 100px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

// List of navigation links
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 4px 0px;
  background-color: #48CAE4;
  flex-wrap: wrap;
  border-radius: 10px;
  margin: 0;
  flex-grow: 1;
  list-style: none;

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 18px;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Navigation items
const Pointer = styled.li`
  padding: 10px 20px;
  margin: 0;
  background-color: none;
  border-radius: 5px;
  text-align: center;

  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 10px 15px;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    padding: 8px 15px;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
  }
`;

// Link styling
const Linker = styled(Link)`
  text-decoration: none;
  color: #023E8A;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    color: #fff;
    transition: color 0.3s ease-in-out;
  }
`;

// Logo container
const Logo = styled.img`
  height: 60px;
  width: auto;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Navbar = () => {
  return (
    <NavMain>
      <NavList>
      <Logo src={LogoImg} alt="Logo" />
        <Pointer><Linker to="/">Home</Linker></Pointer>
        <Pointer><Linker to="/company">Company</Linker></Pointer>
        <Pointer><Linker to="/product">Product</Linker></Pointer>
        <Pointer><Linker to="/our-leaders">Our Leaders</Linker></Pointer>
        <Pointer><Linker to="/contact-us">Contact Us</Linker></Pointer>
      </NavList>
    </NavMain>
  );
};

export default Navbar;
