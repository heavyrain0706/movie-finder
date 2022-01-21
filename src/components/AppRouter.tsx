import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MovieById from "./MovieByID/MovieById";
import Movies from "./Movies/Movies";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/" element={<Movies />} />
            <Route path="/movies/:id/:title" element={<MovieById />} />
        </Routes>
    )
}

export default AppRouter;