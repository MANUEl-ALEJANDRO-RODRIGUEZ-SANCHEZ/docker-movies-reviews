"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { addReview } from "@/app/lib/querys";
import { getUser } from "@/app/lib/context";

const ModalComment = ({ movie, isVisible, onClose }) => {
    const [imgSrc, setImgSrc] = useState(movie?.image || "/logo.svg");
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setRating(0);
            setHoverRating(0);
            setComment("");
        }
    }, [isVisible, movie]);

    if (!isVisible) return null;

    const handleStarClick = (index) => {
        setRating(index);
    };

    const handleStarHover = (index) => {
        setHoverRating(index);
    };

    const handleStarLeave = () => {
        setHoverRating(0);
    };

    const handleSubmit = async () => {
        if (rating === 0) return alert("Marque por lo menos una estrella");
        setIsLoading(true);
        const resAddReview = await addReview({
            user: getUser().email,
            movie: movie.title,
            movieId: movie.id,
            rating,
            comment,
            date: new Date().toISOString().slice(0, 10),
        });

        if (resAddReview === true) {
            setIsLoading(false);
            alert("Reseña creada con exito");
            onClose();
        } else {
            alert("Error al craer una reseña");
            console.log(resAddReview);
        }
    };

    const renderStar = (index) => {
        const isActive = (hoverRating || rating) >= index;
        const starSrc = isActive
            ? "/icons/yellow_star.svg"
            : "/icons/black_star.svg";

        return (
            <button
                key={index}
                type="button"
                className="transition-transform hover:scale-110 focus:outline-none"
                onClick={() => handleStarClick(index)}
                onMouseEnter={() => handleStarHover(index)}
                onMouseLeave={handleStarLeave}
                aria-label={`Calificar ${index} de 5 estrellas`}
            >
                <Image
                    src={starSrc || "/placeholder.svg"}
                    alt={isActive ? "Estrella llena" : "Estrella vacía"}
                    width={32}
                    height={32}
                    className="w-8 h-8 md:w-10 md:h-10"
                />
            </button>
        );
    };

    return (
        <div className="fixed inset-0 w-screen h-screen bg-black/40 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white w-11/12 lg:w-1/2 max-w-xl rounded-xl overflow-hidden flex flex-col gap-6 p-4 md:p-6 shadow-lg items-center">
                <h3 className="text-center text-xl md:text-2xl font-bold text-gray-800">
                    {movie.title}
                </h3>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Imagen de la película */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-full max-w-[200px] md:max-w-none">
                            <Image
                                src={imgSrc || "/placeholder.svg"}
                                onError={() => setImgSrc("/logo.svg")}
                                alt={movie.title}
                                width={300}
                                height={450}
                                className="w-auto h-[250px] md:h-[350px] lg:h-[400px] object-contain rounded shadow-md"
                            />
                        </div>
                    </div>

                    {/* Formulario de reseña */}
                    <div className="w-full md:w-2/3 flex flex-col gap-4">
                        <div>
                            <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                                Calificar película
                            </h4>
                            <div className="flex items-center gap-2 mb-1">
                                {[1, 2, 3, 4, 5].map((index) =>
                                    renderStar(index)
                                )}
                            </div>
                            <p className="text-sm text-gray-500">
                                {rating === 0
                                    ? "Selecciona una calificación"
                                    : `Has seleccionado ${rating} ${
                                          rating === 1
                                              ? "estrella"
                                              : "estrellas"
                                      }`}
                            </p>
                        </div>

                        <div className="mt-2">
                            <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                                Escribe tu reseña
                            </h4>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Comparte tu opinión sobre esta película..."
                                className="w-full h-32 md:h-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                maxLength={500}
                            />
                            <div className="flex justify-end">
                                <span className="text-sm text-gray-500">
                                    {comment.length}/500 caracteres
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg text-sm">
                    <p className="font-medium text-gray-700">Información:</p>
                    <p className="text-gray-600">
                        {movie.year} • {movie.genre}
                    </p>
                </div>

                <div className="w-full flex justify-center gap-4 mt-2">
                    <button
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleSubmit}
                        // disabled={rating === 0}
                    >
                        {isLoading ? "Cargando..." : "Publicar reseña"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalComment;
