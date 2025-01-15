import { useContext } from 'react';
import styled from 'styled-components';
import BannerCard from '../BannerCard/BannerCard';
import { GlobalContext } from '../../context/GlobalContext';
import VideoCardNoButtons from '../VideoCardNoButtons/VideoCArdNoButtons';


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
    top: 49%;
  left: 50%;
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
  height: 100vw;
  position: relative;
  overflow: hidden; // Evita que el contenido adicional de la imagen sea visible fuera del contenedor
  margin: 0;
  padding: 0;

  @media (max-width: 427px) {
    visibility: hidden;
    height: 0;
    display: none;
  }
`;

const Titulo = styled.h1`
  padding-top: 0px;
  color: #f5f5f5;
  font-family: "Roboto", serif;
  font-weight: 200;
  font-size: 46px;
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
  font-size: 18px;
  margin: 0;
  max-width: 90%;
`;

const Imagen = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // Asegura que la imagen cubra todo el contenedor sin deformarse
  position: absolute; // Asegura que se adapte al contenedor padre
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 427px) {
    display: none; 
  }
`;

const Banner = () => {
  const { randomVideo } = useContext(GlobalContext);

  const colorCard = () => {
    if (randomVideo.Categoria === 'FRONT END') {
      return "#6BD1FF"; // Devuelve el color para FRONT END
    } else if (randomVideo.Categoria === 'BACK END') {
      return "#00C86F"; // Devuelve el color para BACK END
    }
    return "#FFBA05"; // Valor por defecto si ninguna de las condiciones anteriores se cumple
  };

  const handleImageClick = () => {
    if (randomVideo && randomVideo.Video) {
      window.location.href = randomVideo.Video;  // Redirige al enlace del video
    }
  };

  return (
    <BannerStyle>
      {randomVideo && (
        <>
          <Imagen src="/image/BannerMain.png" alt={randomVideo.Titulo} />
          <Container>
            <SubContainer>
              <BannerCard
                text={randomVideo.Categoria}
                color={colorCard}
                largo="596.82px"
                TLetra="48px"
              />
              <Titulo>{randomVideo.Titulo}</Titulo>
              <Texto>{randomVideo.Descripcion}</Texto>
            </SubContainer>
            <VideoCardNoButtons
              color={colorCard()}
              image={randomVideo.Imagen}
              video={randomVideo.Video}
              title={randomVideo.Titulo}
              deleteVideo={() => {}}  // You can handle delete logic if needed
            />
          </Container>
        </>
      )}
    </BannerStyle>
  );
};

export default Banner;
