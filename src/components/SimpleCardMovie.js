import Image from "next/image";
import Link from "next/link";

const SimpleCardMovie = ({ movie }) => {
    return (
        <div
            key={movie.id}
            className="bg-white rounded-lg shadow overflow-hidden transition-transform duration-300 hover:scale-[1.05] hover:shadow-md"
        >
            <div className="relative h-[220px]">
                <Image
                    src={movie.image || "/logo.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-3">
                <h3
                    className="font-medium text-gray-800 mb-1 truncate"
                    title={movie.title}
                >
                    {movie.title}
                </h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image
                            src="/icons/black_star.svg"
                            alt="Movie Reviews Logo"
                            width={20}
                            height={20}
                        />
                        <span className="text-sm text-gray-600">
                            {movie.rating}
                        </span>
                    </div>
                    <span className="text-xs text-gray-500">{movie.year}</span>
                </div>
            </div>
        </div>
    );
};
export default SimpleCardMovie;
