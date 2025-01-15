import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import ButtonForm from "../Button/ButtonForm";
import FooterButton from "./FooterButton/FooterButton";

const HeaderStyle = styled.header`
  justify-content: center;
  margin-top: 43px;
  padding-top: 42.5px;
  padding-bottom: 42.5px;
  display: flex;
  flex-direction: column; /* Cambié esto para poner los botones y el texto en columna */
  align-items: center; /* Alineo todo al centro */
  border-top: 5px solid #2271d1;
  background-color: ${(props) => (props.$isHome ? "rgb(0, 0, 0)" : "rgb(0, 0, 0)")};

  img {
    max-width: 10.528rem;
    max-height: 2.5rem;
  }

  @media (max-width: 427px) {
    padding: 6px;
    img {
      max-width: 80%;
      margin-bottom: 10px;
    }
  }
`;

const ContainerButtons = styled.section`
  gap: 25px;
  padding-right: 51.15px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  display: none;
  gap:5px;

  @media (max-width: 427px) {
    gap: 15px;
    padding-right: 10px;
    display: flex;
  }
`;

const Text = styled.h3`
  color: white;
  margin-top: 20px; /* Agregué un margen para separar el texto de los botones */
`;

const Image = styled.img`
  justify-content: center;

  @media (max-width: 427px) {
    display: none;
  }
`;

const Imagen = styled.img`
  width: 38.94px;
  height: 42px;

  @media (max-width: 427px) {
    width: 38.94px;
    height: 42px;
  }
`;

const Footer = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <HeaderStyle $isHome={isHome}>
      <ContainerButtons>
        <FooterButton url="/">
          <Imagen src="image/home.png" />
          HOME
        </FooterButton>

        <FooterButton url="/newvideo">
          <Imagen src="image/Vector2.png" />
          NUEVO VIDEO
        </FooterButton>
      </ContainerButtons>
      <Link to="/">
        <Image src="/image/LogoMain.png" alt="Logo AluraFlix" />
      </Link>
      <Text>Creado por Luis Morúa</Text>
    </HeaderStyle>
  );
};

export default Footer;
