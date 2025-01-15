import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ButtonForm = (props) => {
  const { setIsActive } = useContext(GlobalContext);
  const navigate = useNavigate();

  const irARuta = () => {
    setIsActive(true);
    navigate(props.url);
  };

  return (
    <Stack spacing={1} direction="row">
      <Button
        onClick={irARuta}
        sx={{
          backgroundColor: props.isActive ? "#000" : "transparent",
          color: props.isActive ? "#2271D1" : "#FFF",
          border: `2px solid ${props.isActive ? "#2271D1" : "#FFF"}`,
          width: "180.12px",
          height: "54px",
          borderRadius: "10px",
          boxShadow: props.isActive ? "inset 0 0 10px #2271D1" : "none",
        }}
      >
        {props.texto}
      </Button>
    </Stack>
  );
};

export default ButtonForm;
