import { useState } from "react";
import Image from "next/image";

const ModalDetailsMovie = ({ isVisible, onClose, movie }) => {
    if (!isVisible) return null;

    const [imgSrc, setImgSrc] = useState(movie.image || "/logo.svg");

    return (
        <div className="fixed inset-0 w-screen h-screen bg-black/40 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-11/12 max-w-4xl rounded-xl overflow-hidden flex flex-col lg:flex-row gap-6 p-4 shadow-lg">
                {/* Imagen */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <Image
                        src={imgSrc}
                        onError={() => setImgSrc("/logo.svg")}
                        alt={movie.title}
                        width={300}
                        height={450}
                        className="w-auto h-[300px] lg:h-[450px] object-contain rounded"
                    />
                </div>

                {/* Contenido */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-semibold text-center lg:text-left">
                            {movie.title}
                        </h3>
                        <p className="mt-4 text-sm text-gray-700">
                            {movie.details}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-4 self-center lg:self-end px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalDetailsMovie;
