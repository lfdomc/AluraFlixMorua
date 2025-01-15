/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

  //Estados del Botton Home
  const [isActive, setIsActive] = useState(false);
  const [valorTitulo, setValorTitulo] = useState("");
  const [valorImagen, setValorImagen] = useState("");
  const [valorVideo, setValorVideo] = useState("");
  const [valorDesc, setValorDesc] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [randomVideo, setRandomVideo] = useState(null);
  const [editVideo, setEditVideo] = useState(null);

  const [videos, setVideos] = useState([]);
  const url = "https://alura-flix-fake-oiwx.vercel.app/videos"

  
  

  //La Categorias
  const names = [
    {
      Categoria: 'FRONT END',
      color: "#6BD1FF",

    },
    {
      Categoria: 'BACK END',
      color: "#00C86F",
    },
    {
      Categoria: 'INNOVACIÓN Y GESTIÓN',
      color: "#FFBA05"

    },



  ];



  return (
    <GlobalContext.Provider value={{
      names,
      isActive,
      setIsActive,
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
      randomVideo,
      setRandomVideo,
      url,
      editVideo, 
      setEditVideo,  // Make sure this is passed down correctly
    }}>
      {children}
    </GlobalContext.Provider>
    
  )
}

export default GlobalContextProvider
