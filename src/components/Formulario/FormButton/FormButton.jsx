import styled from "styled-components";

const FButton = styled.button`
  margin-top: 70px;
  padding: 1%;
  width: 180.12px;
  margin-bottom:15px;
  font-family: "Source Code Pro", serif;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  border-color: ${(props) => props.color || 'white'};
  border-width: 3px;
  border-style: solid;
  background-color: transparent;  
  text-align: center;

 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormButton = (props) => {
    return (
      <FButton color={props.color} onClick={props.onClick}>
        {props.text}
      </FButton>
    );
};
