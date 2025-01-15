
import styled from 'styled-components';




const Container = styled.section`
  display: flex;
  position: absolute;
  top: 63%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  z-index: 2;
  padding: 20px;

  @media (max-width: 1024px) {
    padding: 6px;
    font-size: 3rem;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  @media (max-width: 427px) {
    visibility: hidden;
    height: 0;
    display: none;
    
  }
`;

const SubContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-right: 100px;
  @media (max-width: 427px) {
    display: none; /* Esto elimina el espacio */
  }
`;

const BannerStyle = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  @media (max-width: 427px) {
    visibility: hidden;
    height: 0;
    display: none;  // Se añade display: none para eliminar el espacio ocupado por el banner.
  }
`;

const Titulo = styled.h1`
  padding-top: 0px;
  color: #f5f5f5;
  font-family: "Roboto", serif;
  font-weight: 200;
  font-size: 70px;
  margin: 0;

  /* Media query para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
  @media (max-width: 427px) {
    display: none; 
  }
`;

const Texto = styled.h1`
  color: #f5f5f5;
  font-family: "Roboto", serif;
  font-weight: 200;
  font-size: 40px;
  margin: 0;
  max-width: 90%;
`;

const Imagen = styled.img`
  width: 100%;
  height: 100%;
 
  

  @media (max-width: 427px) {
    display: none; 
  }
`;

const FailBanner = () => {
  
  return (
    <BannerStyle>
      
          <Imagen src="/image/BannerMain.png" alt=""/>
          <Container>
            <SubContainer>
              
              <Titulo>Problemas para Encontrar los Datos</Titulo>
              <Texto>Disculpe Las Molestias</Texto>
            </SubContainer>
            
          </Container>
     
    </BannerStyle>
    
  );
};

export default FailBanner;