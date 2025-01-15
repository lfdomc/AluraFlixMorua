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
    url, // Access the URL from GlobalContext
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
    if (!editVideo.Titulo.trim()) newErrors.titulo = "El título es obligatorio.";
    if (!editVideo.Imagen.trim()) newErrors.imagen = "El enlace de la imagen es obligatorio.";
    if (!editVideo.Video.trim()) newErrors.video = "El enlace del video es obligatorio.";
    if (!editVideo.Categoria) newErrors.categoria = "Debe seleccionar una categoría.";
    if (!editVideo.Descripcion.trim()) newErrors.descripcion = "Debe tener descripción.";
    return newErrors;
  };

 

3

Share


You said:
corregir el error en put y delete

dar todo el codigo <editModal>

Iniciando actualización de video...
index-DNfCjOb4.js:733 Estado actual de editVideo: {id: '2', Titulo: 'Git y GitHub para Principiantes #AluraMásssss', Imagen: 'https://i.ytimg.com/vi/-LmFK6skG7s/hq720.jpg?sqp=-…ADIQj0AgKJD&rs=AOn4CLAnIViTpxVq8jZ0YmbVBmn5WdB0Zg', Video: 'https://www.youtube.com/watch?v=-LmFK6skG7s', Categoria: 'BACK END', …}Categoria: "BACK END"Descripcion: "Ve cómo funciona esta famosa herramienta de colaboración muy utilizada en el universo de la tecnología y tiene el control de las diferentes versiones de tus proyectos.."Imagen: "https://i.ytimg.com/vi/-LmFK6skG7s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAnIViTpxVq8jZ0YmbVBmn5WdB0Zg"Titulo: "Git y GitHub para Principiantes #AluraMásssss"Video: "https://www.youtube.com/watch?v=-LmFK6skG7s"id: "2"[[Prototype]]: Object
index-DNfCjOb4.js:733 Video actualizado preparado para enviar: {id: '2', Titulo: 'Git y GitHub para Principiantes #AluraMásssss', Imagen: 'https://i.ytimg.com/vi/-LmFK6skG7s/hq720.jpg?sqp=-…ADIQj0AgKJD&rs=AOn4CLAnIViTpxVq8jZ0YmbVBmn5WdB0Zg', Video: 'https://www.youtube.com/watch?v=-LmFK6skG7s', Categoria: 'BACK END', …}Categoria: "BACK END"Descripcion: "Ve cómo funciona esta famosa herramienta de colaboración muy utilizada en el universo de la tecnología y tiene el control de las diferentes versiones de tus proyectos.."Imagen: "https://i.ytimg.com/vi/-LmFK6skG7s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAnIViTpxVq8jZ0YmbVBmn5WdB0Zg"Titulo: "Git y GitHub para Principiantes #AluraMásssss"Video: "https://www.youtube.com/watch?v=-LmFK6skG7s"id: "2"[[Prototype]]: Object
index-DNfCjOb4.js:733 Enviando petición PUT a: https://alura-flix-fake-oiwx.vercel.app/videos/2
index-DNfCjOb4.js:733 
        
        
       PUT https://alura-flix-fake-oiwx.vercel.app/videos/2 500 (Internal Server Error)
P @ index-DNfCjOb4.js:733
fg @ index-DNfCjOb4.js:37
pg @ index-DNfCjOb4.js:37
hg @ index-DNfCjOb4.js:37
Kf @ index-DNfCjOb4.js:37
Gf @ index-DNfCjOb4.js:37
(anonymous) @ index-DNfCjOb4.js:37
vu @ index-DNfCjOb4.js:40
Jc @ index-DNfCjOb4.js:37
vs @ index-DNfCjOb4.js:37
es @ index-DNfCjOb4.js:37
_g @ index-DNfCjOb4.js:37Understand this errorAI
index-DNfCjOb4.js:733 Respuesta del servidor: Response {type: 'cors', url: 'https://alura-flix-fake-oiwx.vercel.app/videos/2', redirected: false, status: 500, ok: false, …}body: (...)bodyUsed: trueheaders: Headers {}ok: falseredirected: falsestatus: 500statusText: ""type: "cors"url: "https://alura-flix-fake-oiwx.vercel.app/videos/2"[[Prototype]]: Response
index-DNfCjOb4.js:733 Error al realizar la petición PUT: SyntaxError: Unexpected token 'E', "Error: ERO"... is not valid JSON
overrideMethod @ hook.js:608
P @ index-DNfCjOb4.js:733
await in P
fg @ index-DNfCjOb4.js:37
pg @ index-DNfCjOb4.js:37
hg @ index-DNfCjOb4.js:37
Kf @ index-DNfCjOb4.js:37
Gf @ index-DNfCjOb4.js:37
(anonymous) @ index-DNfCjOb4.js:37
vu @ index-DNfCjOb4.js:40
Jc @ index-DNfCjOb4.js:37
vs @ index-DNfCjOb4.js:37
es @ index-DNfCjOb4.js:37
_g @ index-DNfCjOb4.js:37Understand this errorAI
index-DNfCjOb4.js:733 Fetch failed loading: PUT "https://alura-flix-fake-oiwx.vercel.app/videos/2".
P @ index-DNfCjOb4.js:733
fg @ index-DNfCjOb4.js:37
pg @ index-DNfCjOb4.js:37
hg @ index-DNfCjOb4.js:37
Kf @ index-DNfCjOb4.js:37
Gf @ index-DNfCjOb4.js:37
(anonymous) @ index-DNfCjOb4.js:37
vu @ index-DNfCjOb4.js:40
Jc @ index-DNfCjOb4.js:37
vs @ index-DNfCjOb4.js:37
es @ index-DNfCjOb4.js:37
_g @ index-DNfCjOb4.js:37


import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import InputForm from "../InputForm/InputForm";
import { GlobalContext } from "../../context/GlobalContext";

const ModalBackdrop = styled.div
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
;

const ModalContainer = styled.div
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
;

const Titulo = styled.h2
  color: #2271d1;
  font-family: "Roboto", serif;
  font-weight: 900;
  text-align: center;
  font-size: 3.75rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
;

const SectionInput = styled.section
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
;

const Select = styled.select
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
;

const SectionLargeInput = styled.section
  font-family: "Source Code Pro", serif;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #03122f;
  padding: 5px;
;

const TextArea = styled.textarea
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
;

const ButtonGroup = styled.div
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
;

const Button = styled.button
  
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
;

const ErrorText = styled.span
  color: red;
  font-size: 14px;
;

const ImageContainer = styled.section
  display: flex;
  justify-content: end;

const Imagen = styled.img
  border-radius: 15px;
  max-width: 43.33px;
  &:hover {
    background-color: ${(props) => props.$hoverColor || "#0056a6"};
  }




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
    url, // Access the URL from GlobalContext
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
    if (!editVideo.Titulo.trim()) newErrors.titulo = "El título es obligatorio.";
    if (!editVideo.Imagen.trim()) newErrors.imagen = "El enlace de la imagen es obligatorio.";
    if (!editVideo.Video.trim()) newErrors.video = "El enlace del video es obligatorio.";
    if (!editVideo.Categoria) newErrors.categoria = "Debe seleccionar una categoría.";
    if (!editVideo.Descripcion.trim()) newErrors.descripcion = "Debe tener descripción.";
    return newErrors;
  };

  const handleUpdate = async () => {
  console.log("Iniciando actualización de video...");
  console.log("Estado actual de editVideo:", editVideo);

  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    console.warn("Errores de validación:", validationErrors);
    setErrors(validationErrors);
    return;
  }

  const updatedVideo = { ...editVideo };
  console.log("Datos enviados:", JSON.stringify(updatedVideo, null, 2));

  const updatedVideos = videos.map((video) =>
    video.id === editVideo.id ? updatedVideo : video
  );

  try {
    console.log(Enviando petición PUT a: ${url}/${editVideo.id});
    const response = await fetch(${url}/${editVideo.id}, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedVideo),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error del servidor:", errorText);
      alert(Error: ${errorText || "No se pudo actualizar el video."});
      return;
    }

    console.log("Petición PUT exitosa. Actualizando estado local de videos...");
    setVideos(updatedVideos);
    console.log("Videos después de la actualización:", updatedVideos);

    alert("Video actualizado correctamente");
    onClose();
  } catch (error) {
    console.error("Error al realizar la petición PUT:", error);
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
            setValorTitulo={(val) => setEditVideo({ ...editVideo, Titulo: val })}
          />
          {errors.titulo && <ErrorText>{errors.titulo}</ErrorText>}
        </SectionInput>
        <SectionInput>
          <InputForm
            label="Imagen"
            placeholder="Ingrese el enlace de la imagen"
            value={editVideo?.Imagen || ""}
            setValorImagen={(val) => setEditVideo({ ...editVideo, Imagen: val })}
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

bd.json que esta en la direccion: https://alura-flix-fake.vercel.app/videos

{
  "videos": [
    {
      "id": "1",
      "Titulo": "Equipo Front End #AluraMás",
      "Imagen": "https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg",
      "Video": "https://www.youtube.com/watch?v=rpvrLaBQwgg",
      "Categoria": "FRONT END",
      "Descripcion": "En este video, Jeanmarie Quijada, instructora Front End en Alura Latam te explica qué hace el equipo de Front End."
    },
    {
      "id": "2",
      "Titulo": "Git y GitHub para Principiantes #AluraMás",
      "Imagen": "https://i.ytimg.com/vi/-LmFK6skG7s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAnIViTpxVq8jZ0YmbVBmn5WdB0Zg",
      "Video": "https://www.youtube.com/watch?v=-LmFK6skG7s",
      "Categoria": "BACK END",
      "Descripcion": "Ve cómo funciona esta famosa herramienta de colaboración muy utilizada en el universo de la tecnología y tiene el control de las diferentes versiones de tus proyectos.."
    },
    {
      "id": "3",
      "Titulo": "¿Cómo un desarrollador Front End utiliza el Figma? #AluraMás",
      "Imagen": "https://i.ytimg.com/vi/UuAX5azcvDQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBv35TL2JpK7AdWOdaO3y-W5LdKwA",
      "Video": "https://www.youtube.com/watch?v=UuAX5azcvDQ&t=15s",
      "Categoria": "FRONT END",
      "Descripcion": "En este Alura+, Genesys, instructora de Alura Latam, nos responde esa pregunta y nos muestra esta conocida herramienta."
    },
    {
      "id": "4",
      "Titulo": "¿Qué son las Soft Skills?",
      "Imagen": "https://i.ytimg.com/vi/vhwspfvI52k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD6gXiKiza0PJa4GrYBxe5ST8-5PQ",
      "Video": "https://www.youtube.com/watch?v=vhwspfvI52k&t=1s",
      "Categoria": "INOVACIÓN Y GESTIÓN",
      "Descripcion": "En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día."
    },
    {
      "id": "5",
      "Titulo": "¿Qué es JavaScript?",
      "Imagen": "https://i.ytimg.com/vi/GJfOSoaXk4s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkd-YmtXSL0q2mEZR0LZe3llwWFA",
      "Video": "https://www.youtube.com/watch?v=GJfOSoaXk4s",
      "Categoria": "FRONT END",
      "Descripcion": "JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? "
    },
    {
      "id": "6",
      "Titulo": "¿Por Qué Estudiar Programación?",
      "Imagen": "https://i.ytimg.com/vi/PlaQ913yggM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9h6gI95X-QXc-ZSmaH3zA9dhqkw",
      "Video": "https://www.youtube.com/watch?v=PlaQ913yggM",
      "Categoria": "INNOVACIÓN Y GESTIÓN",
      "Descripcion": "¿Por Qué Estudiar Programación? ¿Qué es? ¿Dónde está? ¿Y para qué se utiliza la programación? En este video el Head de Alura Latam, Christian Velasco nos responde esas y otras dudas."
    },
    {
      "id": "7",
      "Titulo": "¿Qué es SQL y NoSQL?",
      "Imagen": "https://i.ytimg.com/vi/cLLKVd5CNLc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAkfbWrdjK-FUCYCImjAoRN1tNMqQ",
      "Video": "https://www.youtube.com/watch?v=cLLKVd5CNLc",
      "Categoria": "BACK END",
      "Descripcion": "¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL) y cuáles son las principales ventajas de cada una? Álvaro Camacho lo explica en este vídeo."
    },
    {
      "id": "8",
      "Titulo": "¿Por qué estudiar Data Science?",
      "Imagen": "https://i.ytimg.com/vi/7_UXo-aqAeM/hqdefault.jpg",
      "Video": "https://www.youtube.com/watch?v=7_UXo-aqAeM&list=PLNKOkLkhi1Ke9j-o8dn6pdG38VPhAoJ1Y&index=2",
      "Categoria": "INOVACIÓN Y GESTIÓN",
      "Descripcion": "Explicacion detallada del mundo de Data Science y todos sus recursos como Machine Learning"
    },
    {
      "id": "9",
      "Titulo": "Frameworks de Front End - Edición especial",
      "Imagen": "https://i.ytimg.com/vi/UNeKzI2WHgQ/hqdefault.jpg",
      "Video": "https://www.youtube.com/watch?v=UNeKzI2WHgQ&list=PLNKOkLkhi1Ke9j-o8dn6pdG38VPhAoJ1Y&index=19",
      "Categoria": "FRONT END",
      "Descripcion": "En este video nuestro instructor de Front End nos explicarás cuáles son los frameworks de Front más conocidos y las diferencias entre ellos."
    },
    {
      "id": "1736769871125",
      "Titulo": "¿Cuáles son las barreras de género en el área de tecnología?",
      "Imagen": "https://i.ytimg.com/vi/jMVULhfUYGM/hqdefault.jpg",
      "Video": "https://www.youtube.com/watch?v=jMVULhfUYGM&list=PLNKOkLkhi1Ke9j-o8dn6pdG38VPhAoJ1Y&index=8",
      "Categoria": "INNOVACIÓN Y GESTIÓN",
      "Descripcion": "En este video, este grupo de talentosas mujeres de la tecnología hablan de las barreras, dificultades y brechas de género en el área."
    },
    {
      "id": "1736770223108",
      "Titulo": "¿Por qué utilizar Java actualmente?",
      "Imagen": "https://i.ytimg.com/vi/3kNuK-XAHEY/hqdefault.jpg",
      "Video": "https://www.youtube.com/watch?v=3kNuK-XAHEY&list=PLNKOkLkhi1Ke9j-o8dn6pdG38VPhAoJ1Y&index=13",
      "Categoria": "BACK END",
      "Descripcion": "En este video, hablaremos de lo último en el lenguaje y la plataforma Java y de por qué debería ser tu elección para un próximo proyecto."
    },
    {
      "id": "1736902971697",
      "Titulo": "¿Cómo es el día a día de una Científica de Datos?",
      "Imagen": "https://i.ytimg.com/vi/cOvpf3Q-ii4/hqdefault.jpg",
      "Video": "https://www.youtube.com/watch?v=cOvpf3Q-ii4&list=PLNKOkLkhi1Ke9j-o8dn6pdG38VPhAoJ1Y&index=15",
      "Categoria": "INNOVACIÓN Y GESTIÓN",
      "Descripcion": "Ven y conoce como es el día a día laboral de una persona que trabaja con datos y como al interpretarlos genera valor para la empresa."
    },
    {
      "id": "4",
      "Titulo": "¿Qué son las Soft Skills?",
      "Imagen": "https://i.ytimg.com/vi/vhwspfvI52k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD6gXiKiza0PJa4GrYBxe5ST8-5PQ",
      "Video": "https://www.youtube.com/watch?v=vhwspfvI52k&t=1s",
      "Categoria": "INNOVACIÓN Y GESTIÓN",
      "Descripcion": "En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día."
    },
    {
      "id": "1736903702319",
      "Titulo": "Especialidad BACKEND | RESUMEN SEMANA 1 - 3 | Oracle Next Education + Alura Latam",
      "Imagen": "https://i.ytimg.com/vi/b71kWley8-o/maxresdefault.jpg",
      "Video": "https://www.youtube.com/watch?v=b71kWley8-o",
      "Categoria": "BACK END",
      "Descripcion": "Bienvenidos al Resumen de la semana 1, 2 y 3 de la especialización en Backend de Oracle Next Education"
    }
  ]
}

280/280

ChatGPT said:
ChatGPT
El error que estás viendo (500 Internal Server Error) indica un problema en el servidor al procesar la solicitud PUT. Esto puede deberse a problemas como:

Datos enviados no válidos: Puede que el servidor no esté recibiendo la información en el formato que espera.
Problema en la API: El servidor podría tener errores internos que causan fallos en el procesamiento.
Revisión del Código
Analizando el código del componente <EditModal>, no parece haber errores graves, pero hay algunas áreas donde podríamos mejorar para prevenir problemas:

Cambios recomendados
Validar los datos antes de enviar: Asegúrate de que todos los campos requeridos sean válidos antes de enviar la solicitud PUT.

Manejo de errores más claro: El servidor parece devolver un mensaje de error que no es JSON válido. Agrega un manejo más robusto para casos donde el texto de respuesta no sea parseable.

Verificar la URL base (url): La URL debe ser precisa. Parece que estás utilizando https://alura-flix-fake.vercel.app/videos en lugar de https://alura-flix-fake-oiwx.vercel.app/videos. Asegúrate de usar la correcta.

Formato del cuerpo (body): Verifica que el JSON.stringify(updatedVideo) produzca un objeto que coincida exactamente con lo que espera el servidor.

Código mejorado
Aquí está una versión ajustada de tu método handleUpdate:

javascript
Copy code
const handleUpdate = async () => {
  console.log("Iniciando actualización de video...");
  console.log("Estado actual de editVideo:", editVideo);

  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    console.warn("Errores de validación:", validationErrors);
    setErrors(validationErrors);
    return;
  }

  const updatedVideo = {
    id: editVideo.id,
    Titulo: editVideo.Titulo.trim(),
    Imagen: editVideo.Imagen.trim(),
    Video: editVideo.Video.trim(),
    Categoria: editVideo.Categoria,
    Descripcion: editVideo.Descripcion.trim(),
  };

  console.log("Datos enviados:", JSON.stringify(updatedVideo, null, 2));

  const updatedVideos = videos.map((video) =>
    video.id === editVideo.id ? updatedVideo : video
  );

  try {
    console.log(`Enviando petición PUT a: ${url}/${editVideo.id}`);
    const response = await fetch(`${url}/${editVideo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedVideo),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error del servidor:", errorText);
      alert(`Error del servidor: ${errorText || "No se pudo actualizar el video."}`);
      return;
    }

    console.log("Petición PUT exitosa. Actualizando estado local de videos...");
    setVideos(updatedVideos);
    console.log("Videos después de la actualización:", updatedVideos);

    alert("Video actualizado correctamente");
    onClose();
  } catch (error) {
    console.error("Error al realizar la petición PUT:", error);
    alert("Hubo un error al actualizar el video. Revisa la consola para más detalles.");
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
            setValorTitulo={(val) => setEditVideo({ ...editVideo, Titulo: val })}
          />
          {errors.titulo && <ErrorText>{errors.titulo}</ErrorText>}
        </SectionInput>
        <SectionInput>
          <InputForm
            label="Imagen"
            placeholder="Ingrese el enlace de la imagen"
            value={editVideo?.Imagen || ""}
            setValorImagen={(val) => setEditVideo({ ...editVideo, Imagen: val })}
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

