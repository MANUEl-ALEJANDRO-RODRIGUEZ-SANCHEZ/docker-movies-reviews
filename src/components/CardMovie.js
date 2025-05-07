"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalDetailsMovie from "./ModalDetailsMovie";

const CardMovie = ({ movie }) => {
    const [imgSrc, setImgSrc] = useState(movie.image || "/logo.svg");
    const [isVisibleModalDetails, setIsVisibleModalDetails] = useState(false);
    return (
        <>
            <div
                key={movie.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg max-w-[500px]"
            >
                <div className="relative h-[400px]">
                    <Image
                        src={imgSrc}
                        onError={() => setImgSrc("/logo.svg")}
                        alt={movie.title}
                        fill
                        className="object-cover mask-b-from-50% mask-b-to-95%"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                        <h3 className="text-xl font-bold text-white mb-1">
                            {movie.title}
                        </h3>
                        <div className="flex items-center mb-1">
                            <div className="flex items-center bg-yellow-400 text-yellow-800 rounded-full px-2 py-0.5 text-sm font-medium mr-2">
                                <Image
                                    src="/icons/black_star.svg"
                                    alt="Movie Reviews Logo"
                                    width={16}
                                    height={16}
                                    loading="lazy"
                                />
                                {movie.rating}
                            </div>
                            <span className="text-white text-sm">
                                {movie.year} • {movie.genre}
                            </span>
                        </div>
                        <div className="flex space-x-2 mt-2">
                            <button
                                className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full text-sm font-medium hover:cursor-pointer"
                                onClick={() => setIsVisibleModalDetails(true)}
                            >
                                Ver detalles
                            </button>
                            <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm hover:cursor-pointer">
                                + Watchlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ModalDetailsMovie
                isVisible={isVisibleModalDetails}
                onClose={() => setIsVisibleModalDetails(false)}
                movie={movie}
            />
        </>
    );
};
export default CardMovie;
