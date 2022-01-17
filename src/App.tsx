import { FC } from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../src/App.scss'
import Header from "./components/Header/Header";
import MovieById from "./components/MovieByID/MovieById";
import Movies from "./components/Movies/Movies";

const App: FC = () => {

    return ( 
        <div className="wrapper"> 
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/" element={<Movies />} />
                    <Route path="/movies/:id/:title" element={<MovieById />} />
                </Routes>
            </BrowserRouter>
        </div> 
    ) 
} 
 
export default App;
