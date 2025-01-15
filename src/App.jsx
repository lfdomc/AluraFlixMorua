import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Background from './components/Background/Background'
import Header from './components/Header/Header'
import GlobalContextProvider from './context/GlobalContext'
import AppRoutes from './routes'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Background>
          <Header/>
          <AppRoutes/>
          <Footer/>
        </Background>
      </GlobalContextProvider>
    </BrowserRouter>
  )
}

export default App