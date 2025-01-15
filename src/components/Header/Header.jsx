import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import ButtonForm from "../Button/ButtonForm";

const HeaderStyle = styled.header`
  padding-top: 42.5px;
  padding-bottom: 42.5px;
  padding-left: 51.15px;
  display: flex;
  justify-content: space-between;
  border-bottom : 5px solid #2271D1;
  background-color: ${(props) => (props.$isHome ? "#262626" : "rgb(0, 0, 0)")};
  
  img {
    max-width: 10.528rem;
    max-height: 2.5rem;
  }

  @media (max-width: 1024px) {
    padding: 20px;
    img {
      max-width: 8rem;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      max-width: 70%;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 427px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      max-width: 80%;
    }
  }
`;

const ContainerButtons = styled.section`
  display: flex;
  gap: 25px;
  padding-right: 51.15px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
    justify-content: center;
  }

  @media (max-width: 427px) {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isNewVideo = location.pathname === "/newvideo";

  return (
    <HeaderStyle $isHome={isHome}>
      <Link to="/">
        <img src="/image/LogoMain.png" alt="Logo AluraFlix" />
      </Link>
      <ContainerButtons>
        <ButtonForm url="/" texto="Home" isActive={isHome} />
        <ButtonForm url="/newvideo" texto="Nuevo Video" isActive={isNewVideo} />
      </ContainerButtons>
    </HeaderStyle>
  );
};

export default Header;
