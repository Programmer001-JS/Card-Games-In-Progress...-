import React from "react"
import styled from "styled-components"


const ButtonWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:30px;
  `;

const Button = styled.button`
  background-color:${props => props.type === "down" ? "red" : "blue"};
  font-size:25px;
  text-align:center;
  font-weight:bold;
  color:${props => props.type === "down" ? "black" : "white"};
`;


const ButtonsTab = ({ onButtonClick }) => (
  <ButtonWrapper>
    <Button name="up" onClick={onButtonClick}>Up</Button>
    <Button name="down" onClick={onButtonClick} type="down">Down</Button>
  </ButtonWrapper>


)
export default ButtonsTab;