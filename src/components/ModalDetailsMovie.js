import { useState } from "react";
import Image from "next/image";

const ModalDetailsMovie = ({ isVisible, onClose, movie }) => {
    if (!isVisible) return null;
    const [imgSrc, setImgSrc] = useState(movie.image || "/logo.svg");

    return (
        <div className="fixed inset-0 w-screen h-screen bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-white w-10/12 h-1/3 p-4 md:w-1/2 flex flex-col lg:flex-row gap-4 rounded-r-2xl items-center">
                <div className="w-11/12 md:w-1/2 md:h-full flex flex-col justify-center overflow-hidden">
                    <Image
                        src={imgSrc}
                        onError={() => setImgSrc("/logo.svg")}
                        alt={movie.title}
                        width={200}
                        height={200}
                        className="w-full h-auto"
                    />
                </div>
                <div className="md:w-1/2 md:h-full flex flex-col justify-between">
                    <div>
                        <h3 className="w-full text-2xl text-center">
                            {movie.title}
                        </h3>
                        <p className="mt-4">{movie.details}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="self-end mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:cursor-pointer active:bg-purple-700"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ModalDetailsMovie;
