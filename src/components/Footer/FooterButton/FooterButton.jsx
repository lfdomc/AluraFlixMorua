import styled from "styled-components";
import { Link } from "react-router-dom";

const Contenedor = styled(Link)`
  width: 30vw; /* Usar un porcentaje de la vista */
  height: 8vh; /* También con vh para adaptarse al alto de la pantalla */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  border: 2px solid #2271D1;
  box-sizing: border-box;
  border-radius: 15px;
  text-decoration: none;
  color: #2271D1;
  font-weight: 900;
  font-size: 4vw; /* Ajuste de tamaño de fuente en función del ancho de la vista */
  
  /* Responsividad: cambia el tamaño en pantallas más pequeñas */
  @media (max-width: 768px) {
    width: 50vw; /* Ancho más grande en pantallas pequeñas */
    height: 10vh; /* Altura ajustada */
    font-size: 5vw; /* Tamaño de fuente ajustado */
  }

  @media (max-width: 480px) {
    width: 70vw; /* Aumenta el ancho en pantallas aún más pequeñas */
    height: 12vh; /* Ajusta la altura */
    font-size: 6vw; /* Aumenta el tamaño de la fuente */
  }
`;

const FooterButton = (props) => {
  return (
    <Contenedor to={props.url}>{props.children}</Contenedor>
  );
};

export default FooterButton;
