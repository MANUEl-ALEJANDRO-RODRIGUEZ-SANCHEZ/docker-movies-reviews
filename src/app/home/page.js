import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import CardMovie from "@/components/CardMovie";
import SimpleCardMovie from "@/components/SimpleCardMovie";
import Review from "@/components/Review";

export default function Home() {
    const featuredMovies = [
        {
            id: 1,
            title: "The Shawshank Redemption",
            image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            rating: 9.3,
            year: 1994,
            genre: "Drama",
            details:
                "Andy Dufresne, un banquero condenado por el asesinato de su esposa y su amante, encuentra esperanza y redención durante su tiempo en la prisión de Shawshank.",
        },
        {
            id: 2,
            title: "The Godfather",
            image: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
            rating: 9.2,
            year: 1972,
            genre: "Crime",
            details:
                "La historia de la familia mafiosa Corleone, liderada por Vito Corleone, y la transformación de su hijo Michael en el nuevo Don.",
        },
        {
            id: 3,
            title: "The Dark Knight",
            image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            rating: 9.0,
            year: 2008,
            genre: "Action",
            details:
                "Batman enfrenta al Joker, un criminal caótico que busca sumir a Gotham en la anarquía y desafiar los límites morales del Caballero Oscuro.",
        },
    ];

    const recentMovies = [
        {
            id: 4,
            title: "Pulp Fiction",
            image: "https://image.tmdb.org/t/p/w500/x7siHmBxskdiL8Z2thRzeGajPm4.jpg",
            rating: 8.9,
            year: 1994,
            genre: "Crime",
        },
        {
            id: 5,
            title: "Forrest Gump",
            image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
            rating: 8.8,
            year: 1994,
            genre: "Drama",
        },
        {
            id: 6,
            title: "Inception",
            image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
            rating: 8.7,
            year: 2010,
            genre: "Sci-Fi",
        },
        {
            id: 7,
            title: "Fight Club",
            image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
            rating: 8.8,
            year: 1999,
            genre: "Drama",
        },
        {
            id: 8,
            title: "Interstellar",
            image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
            rating: 8.6,
            year: 2014,
            genre: "Adventure",
        },
    ];

    // Datos de ejemplo para reseñas
    const recentReviews = [
        {
            id: 1,
            user: "alice",
            movie: "The Shawshank Redemption",
            movieId: 1,
            rating: 5,
            comment: "Una obra maestra absoluta.",
            date: "2024-10-21",
        },
        {
            id: 2,
            user: "bob",
            movie: "The Godfather",
            movieId: 2,
            rating: 5,
            comment: "Simplemente icónica.",
            date: "2024-09-12",
        },
        {
            id: 3,
            user: "carol",
            movie: "The Dark Knight",
            movieId: 3,
            rating: 4,
            comment: "Gran actuación de Heath Ledger.",
            date: "2025-01-03",
        },
    ];

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
                        {featuredMovies.map((movie) => (
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
                        {recentMovies.map((movie) => (
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
                        {recentReviews.map((review) => (
                            <Review review={review} key={review.id} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
