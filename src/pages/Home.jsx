import { useContext, useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import FailBanner from '../components/FailBanner/FailBanner';
import Equip from '../components/Equip/Equip';
import { GlobalContext } from '../context/GlobalContext';
import EditModal from '../components/EditModal/EditModal';


const Home = () => {
  const { names, videos, setVideos, setRandomVideo, url,editVideo, setEditVideo } = useContext(GlobalContext);
  const [hasError, setHasError] = useState(false); // Estado para manejar errores
  

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        setVideos(data);
        // Seleccionar un video aleatorio
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomVideo(data[randomIndex]);
        setHasError(false); // Restablecer el estado de error si se resuelve con éxito
      })
      .catch(() => {
        setHasError(true); // Configurar el estado de error si la solicitud falla
      });
  }, [setVideos, setRandomVideo, url]);

  return (
    <>
      {hasError ? (
        <FailBanner />
      ) : (
        <>
        <Banner />
          {names.map((cat) => (
            <Equip
              key={cat.Categoria}
              bannerText={cat.Categoria}
              color={cat.color}
              prevVideos={videos}
            />
          ))}
          <EditModal
    isOpen={!!editVideo}
    onClose={() => setEditVideo(null)}
  />
        </>
      )}
    </>
  );
}
export default Home;
