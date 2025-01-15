import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import InputForm from "../InputForm/InputForm";
import { GlobalContext } from "../../context/GlobalContext";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #03122f;
  padding: 3% 9%;
  max-width: 95%;
  display: flex;
  flex-direction: column;
  color: #f5f5f5;
  border-radius: 8px;
  border: 6px solid #6bd1ff;
  max-height: 80vh; /* Para limitar la altura máxima */
  overflow-y: auto; /* Permite el desplazamiento vertical */

  @media (max-width: 600px) {
    padding: 2% 5%;
  }
`;

const Titulo = styled.h2`
  color: #2271d1;
  font-family: "Roboto", serif;
  font-weight: 900;
  text-align: center;
  font-size: 3.75rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const SectionInput = styled.section`
  font-family: "Source Code Pro", serif;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1%;
  flex-wrap: wrap;
  gap: 2%;
  background-color: #03122f;

  @media (max-width: 600px) {
    gap: 4%;
    padding: 2% 0;
  }
`;

const Select = styled.select`
  width: 573px;
  padding: 10px;
  background-color: transparent;
  color: #f5f5f5;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  height: 62px;
  width: 100%;
  padding: 0 10px;
  font-size: 16px;
`;

const SectionLargeInput = styled.section`
  font-family: "Source Code Pro", serif;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #03122f;
  padding: 5px;
`;

const TextArea = styled.textarea`
  font-family: "Source Code Pro", serif;
  width: 100%;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  padding: 10px;
  font-size: 16px;
  background-color: #03122f;
  color: #f5f5f5;
`;

const ButtonGroup = styled.div`
  font-family: "Source Code Pro", serif;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 600px) {
   
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

const Button = styled.button`
  
  margin-bottom: 70px;
  width: 180.12px;
  height:50px;
  margin-bottom:15px;
  font-family: "Source Code Pro", serif;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  border-color:  'white';
  border-width: 3px;
  border-style: solid;
  background-color: transparent;  
  text-align: center;

 
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.$hoverColor || "#0056a6"};
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;

const ImageContainer = styled.section`
  display: flex;
  justify-content: end;
`
const Imagen = styled.img`
  border-radius: 15px;
  max-width: 43.33px;
  &:hover {
    background-color: ${(props) => props.$hoverColor || "#0056a6"};
  }

`


const EditModal = ({ isOpen, onClose }) => {
  const {
    editVideo,
    setEditVideo,
    videos,
    setVideos,
    setValorTitulo,
    setValorImagen,
    setValorVideo,
    setValorDesc,
    setCategoriaSeleccionada,
    url,
  } = useContext(GlobalContext);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editVideo) {
      setValorTitulo(editVideo.Titulo || "");
      setValorImagen(editVideo.Imagen || "");
      setValorVideo(editVideo.Video || "");
      setValorDesc(editVideo.Descripcion || "");
      setCategoriaSeleccionada(editVideo.Categoria || "");
    }
  }, [editVideo]);

  const validateForm = () => {
    const newErrors = {};
    if (!editVideo.Titulo.trim())
      newErrors.titulo = "El título es obligatorio.";
    if (!editVideo.Imagen.trim())
      newErrors.imagen = "El enlace de la imagen es obligatorio.";
    if (!editVideo.Video.trim())
      newErrors.video = "El enlace del video es obligatorio.";
    if (!editVideo.Categoria)
      newErrors.categoria = "Debe seleccionar una categoría.";
    if (!editVideo.Descripcion.trim())
      newErrors.descripcion = "Debe tener descripción.";
    return newErrors;
  };

  const handleUpdate = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    const updatedVideo = { ...editVideo };
    const updatedVideos = videos.map((video) =>
      video.id === editVideo.id ? updatedVideo : video
    );
  
    try {
      const response = await fetch(
        `${url}/${editVideo.id}`, // Corrección: usa `${url}/${editVideo.id}`
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedVideo),
        }
      );
  
      if (!response.ok) {
        console.error("Error al actualizar el video");
        return;
      }
  
      setVideos(updatedVideos);
      alert("Video actualizado correctamente");
      onClose();
    } catch (error) {
      console.error("Error al actualizar el video:", error);
      alert("Hubo un error al actualizar el video");
    }
  };

  const handleCategoryChange = (e) => {
    setEditVideo({ ...editVideo, Categoria: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ImageContainer>
          <Imagen src="/image/Xcancel.png" alt="boton de cerrar" onClick={onClose} />
        </ImageContainer>
        <Titulo>EDITAR VIDEO</Titulo>
        <SectionInput>
          <InputForm
            label="Título"
            placeholder="Ingrese el título"
            value={editVideo?.Titulo || ""}
            setValorTitulo={(val) =>
              setEditVideo({ ...editVideo, Titulo: val })
            }
          />
          {errors.titulo && <ErrorText>{errors.titulo}</ErrorText>}
        </SectionInput>
        <SectionInput>
          <InputForm
            label="Imagen"
            placeholder="Ingrese el enlace de la imagen"
            value={editVideo?.Imagen || ""}
            setValorImagen={(val) =>
              setEditVideo({ ...editVideo, Imagen: val })
            }
          />
          {errors.imagen && <ErrorText>{errors.imagen}</ErrorText>}
        </SectionInput>
        <SectionInput>
          <InputForm
            label="Video"
            placeholder="Ingrese el enlace del video"
            value={editVideo?.Video || ""}
            setValorVideo={(val) => setEditVideo({ ...editVideo, Video: val })}
          />
          {errors.video && <ErrorText>{errors.video}</ErrorText>}
        </SectionInput>
        <SectionLargeInput>
          <label>Categoría</label>
          <Select
            value={editVideo?.Categoria || ""}
            onChange={handleCategoryChange}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#03122F",
              color: "#f5f5f5",
              borderRadius: "4px",
            }}
          >
            <option value="">Seleccionar categoría</option>
            <option value="FRONT END">FRONT END</option>
            <option value="BACK END">BACK END</option>
            <option value="INNOVACIÓN Y GESTIÓN">INNOVACIÓN Y GESTIÓN</option>
          </Select>
          {errors.categoria && <ErrorText>{errors.categoria}</ErrorText>}
        </SectionLargeInput>
        <SectionLargeInput>
          <label>Descripción</label>
          <TextArea
            placeholder="¿De qué se trata el video?"
            value={editVideo?.Descripcion || ""}
            onChange={(e) =>
              setEditVideo({ ...editVideo, Descripcion: e.target.value })
            }
          />
          {errors.descripcion && <ErrorText>{errors.descripcion}</ErrorText>}
        </SectionLargeInput>
        <ButtonGroup>
          <Button onClick={handleUpdate}>Guardar</Button>
          <Button color="red" $hoverColor="#b20000" onClick={onClose}>
            Cancelar
          </Button>
        </ButtonGroup>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default EditModal;

