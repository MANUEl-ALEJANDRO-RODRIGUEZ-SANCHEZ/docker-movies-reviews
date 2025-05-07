// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//     return (
//         <header className="bg-white shadow-md">
//             <div className="container mx-auto px-4 py-3">
//                 <div className="flex items-center justify-between">
//                     {/* Logo */}
//                     <Link className="flex items-center" href="/home">
//                         <div className="mr-2">
//                             <Image
//                                 src="/logo.svg"
//                                 alt="CineReview Logo"
//                                 width={40}
//                                 height={40}
//                             />
//                         </div>
//                         <span className="text-xl font-bold text-purple-700">
//                             CineReview
//                         </span>
//                     </Link>

//                     {/* Barra de búsqueda */}
//                     <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
//                         <div className="relative w-full">
//                             <input
//                                 type="text"
//                                 placeholder="Buscar películas, actores, directores..."
//                                 className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                             />
//                             <div className="absolute left-3 top-2.5 text-gray-400">
//                                 <Image
//                                     src="/icons/search.svg"
//                                     alt="Movie Reviews Logo"
//                                     width={20}
//                                     height={20}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Navegación y perfil */}
//                     <div className="flex items-center space-x-4">
//                         <button className="md:hidden text-gray-700 hover:text-purple-700">
//                             <Image
//                                 src="/icons/search.svg"
//                                 alt="Movie Reviews Logo"
//                                 width={20}
//                                 height={20}
//                             />
//                         </button>
//                         <button className="text-gray-700 hover:text-purple-700">
//                             <Image
//                                 src="/icons/menu.svg"
//                                 alt="Movie Reviews Logo"
//                                 width={32}
//                                 height={32}
//                             />
//                         </button>
//                         <Link
//                             href="/login"
//                             className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200"
//                         >
//                             <Image
//                                 src="/icons/user.svg"
//                                 alt="Movie Reviews Logo"
//                                 width={32}
//                                 height={32}
//                             />
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };
// export default Header;

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Cerrar el menú cuando se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Prevenir scroll cuando el menú está abierto en móviles
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-md relative z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link className="flex items-center" href="/home">
                        <div className="mr-2">
                            <Image
                                src="/logo.svg"
                                alt="CineReview Logo"
                                width={40}
                                height={40}
                            />
                        </div>
                        <span className="text-xl font-bold text-purple-700">
                            CineReview
                        </span>
                    </Link>

                    {/* Barra de búsqueda */}
                    <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Buscar películas, actores, directores..."
                                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <div className="absolute left-3 top-2.5 text-gray-400">
                                <Image
                                    src="/icons/search.svg"
                                    alt="Buscar"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Navegación y perfil */}
                    <div className="flex items-center space-x-4">
                        <button className="md:hidden text-gray-700 hover:text-purple-700">
                            <Image
                                src="/icons/search.svg"
                                alt="Buscar"
                                width={20}
                                height={20}
                            />
                        </button>
                        <button
                            className="text-gray-700 hover:text-purple-700 hover:cursor-pointer relative"
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen}
                            aria-label="Menú principal"
                        >
                            <Image
                                src="/icons/menu.svg"
                                alt="Menú"
                                width={32}
                                height={32}
                            />
                        </button>
                        <button
                            onClick={toggleMenu}
                            href="/login"
                            className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 hover:cursor-pointer"
                        >
                            <Image
                                src="/icons/user.svg"
                                alt="Usuario"
                                width={32}
                                height={32}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú desplegable */}
            <div
                ref={menuRef}
                className={`fixed inset-0 bg-black/60 bg-opacity-50 z-40 transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <div
                    className={`absolute right-0 top-0 h-full bg-white w-64 md:w-80 shadow-xl transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800">
                                Menú
                            </h2>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                                aria-label="Cerrar menú"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <nav>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        href="/home"
                                        className="flex items-center py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/movies"
                                        className="flex items-center py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                                            />
                                        </svg>
                                        Películas
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/series"
                                        className="flex items-center py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        Series
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/categorias"
                                        className="flex items-center py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                            />
                                        </svg>
                                        Categorías
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/mi-lista"
                                        className="flex items-center py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                            />
                                        </svg>
                                        Mi Lista
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/mis-resenas"
                                        className="flex items-center py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                        </svg>
                                        Mis Reseñas
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        href="/configuracion"
                                        className="flex items-center py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        Configuración
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/ayuda"
                                        className="flex items-center py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        Ayuda
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/login"
                                        className="flex items-center py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                            />
                                        </svg>
                                        Cerrar Sesión
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
