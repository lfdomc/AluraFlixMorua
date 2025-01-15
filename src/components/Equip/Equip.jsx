import styled from "styled-components";
import BannerCard from "../BannerCard/BannerCard";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import VideoCard from "../VideoCard/VideoCard";

const SectionEquipo = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 43px;
  padding-top: 50px;

  @media (max-width: 1024px) {
    padding-top: 106px;
  }

  @media (max-width: 427px) {
    padding-top: 20px;
  }
`;

const ContainerEquips = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto; /* Habilitar el desplazamiento horizontal */
  margin-top: 40px;
  gap: 31.67px; /* Espacio entre los elementos */
  justify-content: flex-start; /* Alinear elementos al inicio */
  padding-bottom: 30px;

  &::-webkit-scrollbar {
    height: 10px;

    background: #3f4c5c;

    /* Altura del scroll horizontal */
  }

  &::-webkit-scrollbar-thumb {
    background: #2271d1; /* Color del scroll */
    border-radius: 10px;
    /* Bordes redondeados */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #5da1f5; /* Color del scroll al pasar el mouse */
  }
`;

const Equip = (props) => {
  const { videos, setVideos,url } = useContext(GlobalContext);

 const deleteVideo = (id) => {
  setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));

  fetch(`${url}/${id}`, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al eliminar el video: " + response.statusText);
      }
      return response.json();
    })
    .then(() => {
      console.log("Video eliminado de la base de datos");
    })
    .catch((error) => {
      console.error("Error al eliminar el video", error);
    });
};

  const filteredVideos = videos.filter(
    (video) => video.Categoria === props.bannerText
  );

  return (
    <SectionEquipo>
      <BannerCard
        text={props.bannerText}
        color={props.color}
        largo="632px"
        TLetra="32px"
      />
      <ContainerEquips>
        {filteredVideos.map((video, index) => {
          return (
            <VideoCard
              key={video.id} // Mantén esto para React
              id={video.id} // Pasa el id explícitamente
              color={props.color}
              image={video.Imagen}
              video={video.Video}
              title={video.Titulo}
              Categoria={video.Categoria}
              Descripcion={video.Descripcion}
              deleteVideo={() => deleteVideo(video.id)}
            />
          );
        })}
      </ContainerEquips>
    </SectionEquipo>
  );
};

export default Equip;
