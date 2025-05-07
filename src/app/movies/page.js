"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import CardMovie from "@/components/CardMovie";
import { getAllMovies } from "../lib/querys";

const AllMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            const data = await getAllMovies();
            if (data === false) {
                alert("ERROR al obtener las peliculas");
            } else {
                setMovies(data);
            }
        };

        loadMovies();
    }, []);

    return (
        <>
            <Header />
            <h1 className="text-2xl mt-4">Todas las películas disponibles:</h1>
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {movies?.map((movie) => (
                    <CardMovie movie={movie} key={movie.id} />
                ))}
            </main>
        </>
    );
};
export default AllMovies;
