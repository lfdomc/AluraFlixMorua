import React, { useState } from 'react';
import styled from "styled-components";

const EquipCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 429.19px; 
  height: 260px; 
  padding: 0px;
  border-radius: 15px;
  background-color: ${(props) => props.$color || 'white'};
  border: 8px solid ${(props) => props.$color || 'white'};
  &:hover {
    border: 8px solid #2271D1;
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





const VideoCard = ({ color, image, video, title, deleteVideo }) => {
    const [isVideoVisible, setIsVideoVisible] = useState(false);
  
    const extractVideoId = (url) => {
      const regExp = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^/]+\/.*\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regExp);
      return match ? match[1] : null;
    };
  
    const videoId = extractVideoId(video);
  
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
     
      </EquipCard>
    );
};

export default VideoCard;
