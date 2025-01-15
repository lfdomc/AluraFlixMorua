import * as React from 'react';
import styled from "styled-components";
import InputForm from "../InputForm/InputForm";
import OptionList from "../OptionsList/OptionList";
import { FormButton } from "./FormButton/FormButton";
import { GlobalContext } from '../../context/GlobalContext';

const Titulo = styled.h1`
  display: flex;
  color: #f5f5f5;
  font-family: "Roboto", serif;
  font-weight: 900;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  margin: 2px;

  @media (max-width: 600px) {
    font-size: 2rem;
    padding: 10px;
  }
`;

const Subtitulo = styled.h3`
  display: flex;
  color: #f5f5f5;
  font-family: "Roboto", serif;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 2px;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Container = styled.section`
  padding: 3% 9%;
  max-width: 90%;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 2% 5%;
  }
`;

const Titulo2 = styled.h2`
  font-family: "Source Code Pro", serif;
  font-style: normal;
  font-weight: 500;
  color: #f5f5f5;
  font-size: 32px;
  padding-left: 1%;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const SectionInput = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1%;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 430px) {
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    gap: 4%;
    padding: 2% 0;
  }
`;

const SectionLargeInput = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2%;
  padding-left: 9px;

  @media (max-width: 600px) {
    padding-left: 0;
    width: 90%;
  }
`;

const LargeInput = styled.div`
  width: 45%;
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 90%;
  }

  textarea {
    width: 100%;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
    padding: 10px;
    font-size: 16px;
    background-color: #262626;
    color: white;
  }
`;

const SectionButton = styled.section`
  display: flex;
  gap: 32px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;

const Label = styled.label`
  font-family: "Source Code Pro", serif;
  font-size: 20px;
  color: white;
  margin-bottom: 8px;
  display: block;
`;

const Formulario = () => {
  const {
    valorTitulo,
    setValorTitulo,
    valorImagen,
    setValorImagen,
    valorVideo,
    setValorVideo,
    valorDesc,
    setValorDesc,
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    videos,
    setVideos,
    url,
  } = React.useContext(GlobalContext);

  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  // Llamar a clearForm cuando el formulario se monte
  React.useEffect(() => {
    clearForm();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!valorTitulo.trim()) newErrors.titulo = "El título es obligatorio.";
    if (!valorImagen.trim()) newErrors.imagen = "El enlace de la imagen es obligatorio.";
    if (!valorVideo.trim()) newErrors.video = "El enlace del video es obligatorio.";
    if (!categoriaSeleccionada || categoriaSeleccionada === "")
      newErrors.categoria = "Debe seleccionar una categoría.";
    if (!valorDesc.trim()) newErrors.descripcion = "La descripción es obligatoria.";
    return newErrors;
  };

  const SendInfo = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    let dataToSend = {
      id: String(Date.now()),
      Titulo: valorTitulo,
      Imagen: valorImagen,
      Video: valorVideo,
      Categoria: categoriaSeleccionada,
      Descripcion: valorDesc,
      
    };

    setLoading(true);
    try {
      await registrarVideo(dataToSend);
      setVideos((prevVideos) => [...prevVideos, dataToSend]);
      clearForm();
    } catch (error) {
      console.error("Error al registrar el video:", error);
    } finally {
      setLoading(false);
    }
  };

  const registrarVideo = async (dataToSend) => {
    console.log(url)
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error("No se pudo registrar el video");
    }
  };

  const clearForm = () => {
    setValorTitulo("");
    setValorImagen("");
    setValorVideo("");
    setValorDesc("");
    setCategoriaSeleccionada(""); // Cambiado aquí a ""
    setErrors({});
  };

  return (
    <form onSubmit={SendInfo}>
      <Titulo>NUEVO VIDEO</Titulo>
      <Subtitulo>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</Subtitulo>
      <Container>
        <Titulo2>Crear Tarjeta</Titulo2>
        <SectionInput>
          <div>
            <InputForm
              id="titulo"
              label="Título"
              placeholder="Ingrese el Título"
              value={valorTitulo}
              setValorTitulo={setValorTitulo}
            />
            {errors.titulo && <ErrorText>{errors.titulo}</ErrorText>}
          </div>
          <div>
            <OptionList setPersonName={setCategoriaSeleccionada} />
            {errors.categoria && <ErrorText>{errors.categoria}</ErrorText>}
          </div>
        </SectionInput>
        <SectionInput>
          <div>
            <InputForm
              id="imagen"
              label="Imagen"
              placeholder="Ingrese el Link de la Imagen"
              value={valorImagen}
              setValorImagen={setValorImagen}
            />
            {errors.imagen && <ErrorText>{errors.imagen}</ErrorText>}
          </div>
          <div>
            <InputForm
              label="Video"
              placeholder="Ingrese el Link del Video"
              value={valorVideo}
              setValorVideo={setValorVideo}
            />
            {errors.video && <ErrorText>{errors.video}</ErrorText>}
          </div>
        </SectionInput>
        <SectionLargeInput>
          <LargeInput>
            <Label>Descripción</Label>
            <textarea
              placeholder="¿De qué se trata el video?"
              value={valorDesc}
              onChange={(e) => setValorDesc(e.target.value)}
            />
            {errors.descripcion && <ErrorText>{errors.descripcion}</ErrorText>}
          </LargeInput>
        </SectionLargeInput>
        <SectionButton>
          <FormButton
            text={loading ? "GUARDANDO..." : "GUARDAR"}
            color="#2271D1"
            type="submit"
            disabled={loading}
          />
          <FormButton
            text="LIMPIAR"
            color="white"
            onClick={clearForm}
            type="button"
          />
        </SectionButton>
      </Container>
    </form>
  );
};

export default Formulario;

