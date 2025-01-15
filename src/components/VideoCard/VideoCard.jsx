import React, { useContext, useState } from 'react';
import styled from "styled-components";
import { GlobalContext } from '../../context/GlobalContext';

const EquipCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 429.19px; 
  height: 260px; 
  padding: 0px;
  border-radius: 15px;
  background-color: ${(props) => props.$color || 'white'};
  border: 10px solid ${(props) => props.$color || 'white'};
  &:hover {
    border: 10px solid #2271D1;
  }
  @media (max-width: 480px) {
    width:300px;
  }
`;

const VideoFrame = styled.iframe`
  width: 429.19px; 
  height: 260px; 
  border: none;
  border-radius: 15px 15px 0 0;
  @media (max-width: 480px) {
    width:300px;
  }
`;

const ImageContainer = styled.div`
  width: 429.19px; 
  height: 260px; 
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 15px 15px 0 0;
  cursor: pointer;
  @media (max-width: 480px) {
    width:300px;
  }
`;

const ButtonSection = styled.section`
  padding-top: 15px;
  padding-bottom: 16px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 0px 0px 15px 15px;
  border-top: 4px solid ${(props) => props.$color || 'white'};
  margin-top: 0px;
  position: relative;
  z-index: 1;

  @media (max-width: 427px) {
    gap: 10px;
  }
`;

const ImageButton = styled.img`
  max-width: 109.43px;
  max-height: 28px;
  padding: 3px;
  transition: border 0.3s ease; 
  
  &:hover {
    border: 2px solid white; 
    border-radius: 5px; 
    background-color:${(props) => props.$color || 'white'};
    color:black;
  }

  @media (max-width: 427px) {
    max-width: 80px;
  }
`;

const VideoCard = ({ id ,color, image, video, title, deleteVideo, Categoria, Descripcion }) => {
  const { setEditVideo } = useContext(GlobalContext);  

  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const extractVideoId = (url) => {
    const regExp = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^/]+\/.*\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(video);

  const handleEditClick = () => {


    setEditVideo({
      id: id,
      Titulo: title,
      Imagen: image,
      Video: video,
      Categoria: Categoria, // Correcto
      Descripcion: Descripcion, // Correcto
    });
  };

  return (
    <EquipCard $color={color}>
      {isVideoVisible ? (
        <VideoFrame
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <ImageContainer $imageUrl={image} onClick={() => setIsVideoVisible(true)} />
      )}
      <ButtonSection $color={color}>
        <ImageButton $color={color} src="/image/borrar.png" alt="Delete" onClick={() => deleteVideo(title)} />
        <ImageButton $color={color} src="/image/editar.png" alt="Edit" onClick={handleEditClick} />
      </ButtonSection>
    </EquipCard>
  );
};

export default VideoCard;
