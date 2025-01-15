import styled from "styled-components";

const Contenedor = styled.div`
  width: ${(props) => props.$largo};
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$color || "transparent"};
  border: 2px solid #000;
  box-sizing: border-box;
  border-radius: 25px;
  
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 427px) {
    width: 100%;
  }

  &:hover {
    border: 8px solid white;
    box-shadow : black;
  }
`;

const Titulo = styled.h1`
  color: #f5f5f5;
  font-family: "Roboto", serif;
  font-weight: 500;
  font-size: ${(props) => props.$TLetra};
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: ${(props) => `calc(${props.$TLetra} * 0.9)`}; 
  }
  @media (max-width: 768px) {
    font-size: ${(props) => `calc(${props.$TLetra} * 0.8)`}; 
  }
  @media (max-width: 427px) {
    font-size: ${(props) => `calc(${props.$TLetra} * 0.8)`}; 
  }
`;

const BannerCard = (props) => {
  return (
    <Contenedor $color={props.color} $largo={props.largo}>
      <Titulo $TLetra={props.TLetra}>{props.text}</Titulo>
    </Contenedor>
  );
};

export default BannerCard;
