import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import NotFound from "./pages/NotFound"; 

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newvideo" element={<NewVideo />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
