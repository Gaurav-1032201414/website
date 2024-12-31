import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #CAF0F8;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 300px;
    height: 400px;
    margin: 20px;
    font-family: 'Saira Condensed', sans-serif;
`;

const CardImage = styled.img`
    width: 300px;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const CardContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CardTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
    letter-spacing: 1px;
`;

const CardButton = styled.button`
    background-color: #03045E;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 10px 55px;
    text-align: center;
    font-family: 'Source Serif 4', sans-serif;
    text-decoration: none !important;
    display: inline-block;
    font-size: 20px;
    margin: 15px 2px 4px 2px;
    
    &:hover {
        background-color: #023E8A;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
    }
`;  

const Linker = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    color: #fff;
    transition: color 0.3s ease-in-out;
  }
`;


const ProductCard = (props) => {
    return (
        <CardContainer>
            <CardImage src={props.image} alt={props.title} />
            <CardContent>
                <CardTitle>{props.title}</CardTitle>
                {/* <CardDescription>{props.description}</CardDescription> */}
                <CardButton>
                    <Linker to={`/product/${props.id}`}>Explore</Linker>
                </CardButton>
            </CardContent>
        </CardContainer>
    );
}

export default ProductCard;
