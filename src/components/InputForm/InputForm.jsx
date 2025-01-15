import styled from 'styled-components';

const Input = styled.input`
  background-color: transparent;
  border-color: gray;
  border-width: 3px;
  border-style: solid;
  border-radius: 10px;
  height: 62px;
  width: 530px; /* Ancho por defecto */
  padding: 0 0.625rem;
  color: white;
  font-size: 1rem;
  max-width: 90%; /* Evita que los inputs se desborden */
  
  &:focus {
    outline: none;
    border-color: lightblue;
  }

  @media (max-width: 573px) {
    width: 100%; /* Ajusta el ancho en pantallas pequeñas */
    height: 3rem;
    font-size: 0.875rem;
  }
`;

const Box1 = styled.section`
  width: 100%;
  max-width: 40.8125rem; 
  margin: 0 auto; 
  padding: 0 1rem;

  @media (max-width: 573px) {
    max-width: 90%; 
  }

  @media (max-width: 430px) {
    width: 100%; /* Asegurar que los elementos ocupen todo el ancho disponible */
  }
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

const InputForm = (props) => {
  const handleChange = (e) => {
    if (props.setValorTitulo) {
      props.setValorTitulo(e.target.value);
    }
    if (props.setValorImagen) {
      props.setValorImagen(e.target.value);
    }
    if (props.setValorVideo) {
      props.setValorVideo(e.target.value);
    }
  };

  return (
    <Box1>
      {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
      <Input
        id={props.id}
        value={props.value}
        onChange={handleChange}
        placeholder={props.placeholder}
        required
      />
    </Box1>
  );
};

export default InputForm;
