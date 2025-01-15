import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";

const SectionLargeInput = styled.section`
  font-family: "Source Code Pro", serif;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: transparent;
  padding: 5px;
  
`;
const Label = styled.label`
  font-family: "Source Code Pro", serif;
  font-size: 1.25rem; 
  color: white;
  margin-bottom: 0.5rem;
  display: block;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }
`;

const Select = styled.select`
 border-width: 3px;
  border-style: solid;
  border-radius: 10px;
  height: 3.875rem;
  width: 573px;
  padding: 10px;
  background-color: transparent;
  color:gray;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  
  font-size: 16px;
  


  /* Ajustes para pantallas pequeñas */
  @media (max-width: 600px) {
    width: 90vw; /* Ajuste en pantallas pequeñas */
  }

  @media (max-width: 430px) {
    width: 100%; /* Asegurar que el select ocupe todo el ancho */
  }
`;

const Option = styled.option`

  color: white;
  background-color:#262626; /* Cambiar este valor por el color deseado */
  &:hover {
    background-color: #e0e0e0; /* Color al pasar el cursor por encima */
  }
`;

export default function OptionList() {
  const { names, categoriaSeleccionada, setCategoriaSeleccionada } =
    useContext(GlobalContext);

  const handleChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  return (
    <SectionLargeInput>
      <label>Categoría</label>
      <Select
        value={categoriaSeleccionada || ""}
        onChange={handleChange}
      >
        <Option value="">Seleccionar categoría</Option>
        {names.map((item, index) => (
          <Option key={index} value={item.Categoria}>
            {item.Categoria}
          </Option>
        ))}
      </Select>
    </SectionLargeInput>
  );
}
