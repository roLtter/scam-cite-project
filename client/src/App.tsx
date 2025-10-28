import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import ScamPage from "./pages/ScamPage.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<ScamPage />} />
        </Routes>
    );
}

export default App;