"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import CardMovie from "@/components/CardMovie";
import SimpleCardMovie from "@/components/SimpleCardMovie";
import Review from "@/components/Review";
import { useState, useEffect } from "react";
import { getAllMovies, getAllReviews } from "../lib/querys";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            const data = await getAllMovies();
            if (data === false) {
                alert("ERROR al obtener las peliculas");
            } else {
                setMovies(data);
            }
        };

        const loadReviews = async () => {
            const data = await getAllReviews();
            if (data === false) {
                alert("ERROR al obtener las reseñas");
            } else {
                setReviews(data);
            }
        };

        loadMovies();
        loadReviews();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <Header />

            {/* Contenido principal */}
            <main className="container mx-auto px-4 py-8">
                {/* Películas destacadas */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Películas Destacadas
                        </h2>
                        <Link
                            href="/movies"
                            className="flex items-center text-purple-600 hover:text-purple-800"
                        >
                            Ver todas{" "}
                            <Image
                                src="/icons/chevron.svg"
                                alt="Movie Reviews Logo"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {movies.slice(0, 3).map((movie) => (
                            <CardMovie movie={movie} key={movie.id} />
                        ))}
                    </div>
                </section>

                {/* Películas recientes */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Películas Recientes
                        </h2>
                        <Link
                            href="/movies"
                            className="flex items-center text-purple-600 hover:text-purple-800"
                        >
                            Ver todas{" "}
                            <Image
                                src="/icons/chevron.svg"
                                alt="Movie Reviews Logo"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {movies.slice(4, 9).map((movie) => (
                            <SimpleCardMovie movie={movie} key={movie.id} />
                        ))}
                    </div>
                </section>

                {/* Reseñas recientes */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Reseñas Recientes
                        </h2>
                        <Link
                            href="/reviews"
                            className="flex items-center text-purple-600 hover:text-purple-800"
                        >
                            Ver todas{" "}
                            <Image
                                src="/icons/chevron.svg"
                                alt="Movie Reviews Logo"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {reviews.slice(0, 3).map((review) => (
                            <Review review={review} key={review.id} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
