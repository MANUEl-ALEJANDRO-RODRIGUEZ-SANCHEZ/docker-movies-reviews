"use client";

import { useState } from "react";
import Image from "next/image";
import { registerUser, loginUser } from "./lib/querys";
import ModalLogin from "@/components/ModalLogin";
import { useRouter } from "next/navigation";

const initialStateFormRegister = {
    name: "",
    email: "",
    password: "",
};

const initialStateFormLogin = {
    email: "",
    password: "",
};

export default function Login() {
    const [activeTab, setActiveTab] = useState("login");
    const [formLogin, setFormLogin] = useState(initialStateFormLogin);
    const [formRegister, setFormRegister] = useState(initialStateFormRegister);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalDetails, setModalDetails] = useState({
        title: "",
        text: "",
    });
    const router = useRouter();

    async function signUp() {
        let query = await registerUser(formRegister);
        if (query === true) {
            setModalDetails({
                title: "Exito!",
                text: "Registro exitoso, ahora inicia sesión",
            });
            setFormRegister(initialStateFormRegister);
        } else {
            setModalDetails({
                title: "Error!",
                text: "Ha ocurrido un error, intentalo mas tarde",
            });
        }
        setIsModalVisible(true);
    }

    async function logIn() {
        let query = await loginUser(formLogin);
        if (query === true) {
            router.push("/home");
        } else {
            setModalDetails({
                title: "Error!",
                text: "Ha ocurrido un error, intentalo mas tarde",
            });
            setIsModalVisible(true);
        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-[700px]">
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/logo.svg"
                            alt="Movie Reviews Logo"
                            width={60}
                            height={60}
                            className="drop-shadow drop-shadow-gray-300"
                        />
                    </div>

                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        {activeTab === "login"
                            ? "Iniciar Sesión"
                            : "Crear Cuenta"}
                    </h1>

                    {/* Tabs */}
                    <div className="flex border-b mb-6">
                        <button
                            className={`flex-1 py-2 font-medium text-center transition-all duration-300 hover:cursor-pointer hover:scale-110 ${
                                activeTab === "login"
                                    ? "border-b-2 border-purple-600 text-purple-600"
                                    : "text-gray-500"
                            }`}
                            onClick={() => setActiveTab("login")}
                        >
                            Iniciar Sesión
                        </button>
                        <button
                            className={`flex-1 py-2 font-medium text-center transition-all duration-300 hover:cursor-pointer hover:scale-110 ${
                                activeTab === "register"
                                    ? "border-b-2 border-purple-600 text-purple-600"
                                    : "text-gray-500"
                            }`}
                            onClick={() => setActiveTab("register")}
                        >
                            Registrarse
                        </button>
                    </div>

                    {/* Forms Container */}
                    <div
                        className="relative overflow-hidden h-full"
                        style={{ minHeight: "340px" }}
                    >
                        {/* Login Form */}
                        <div
                            className={`transition-all duration-500 ease-in-out absolute w-full ${
                                activeTab === "login"
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-full opacity-0 pointer-events-none"
                            }`}
                        >
                            <div className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Correo Electrónico
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="tu@email.com"
                                        value={formLogin.email}
                                        onChange={(e) => {
                                            setFormLogin({
                                                ...formLogin,
                                                email: e.target.value,
                                            });
                                        }}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Contraseña
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="••••••••"
                                        value={formLogin.password}
                                        onChange={(e) => {
                                            setFormLogin({
                                                ...formLogin,
                                                password: e.target.value,
                                            });
                                        }}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="ml-2 block text-sm text-gray-700"
                                        >
                                            Recordarme
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="font-medium text-purple-600 hover:text-purple-500"
                                        >
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                </div>

                                <button
                                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    onClick={logIn}
                                >
                                    Iniciar Sesión
                                </button>
                            </div>
                        </div>

                        {/* Register Form */}
                        <div
                            className={`transition-all duration-500 ease-in-out absolute w-full ${
                                activeTab === "register"
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-full opacity-0 pointer-events-none"
                            }`}
                        >
                            <div className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Nombre
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Tu nombre"
                                        value={formRegister.name}
                                        onChange={(e) =>
                                            setFormRegister({
                                                ...formRegister,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="register-email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Correo Electrónico
                                    </label>
                                    <input
                                        id="register-email"
                                        type="email"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="tu@email.com"
                                        value={formRegister.email}
                                        onChange={(e) =>
                                            setFormRegister({
                                                ...formRegister,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="register-password"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Contraseña
                                    </label>
                                    <input
                                        id="register-password"
                                        type="password"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="••••••••"
                                        value={formRegister.password}
                                        onChange={(e) =>
                                            setFormRegister({
                                                ...formRegister,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="confirm-password"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Confirmar Contraseña
                                    </label>
                                    <input
                                        id="confirm-password"
                                        type="password"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        required
                                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="ml-2 block text-sm text-gray-700"
                                    >
                                        Acepto los{" "}
                                        <a
                                            href="#"
                                            className="text-purple-600 hover:text-purple-500"
                                        >
                                            términos y condiciones
                                        </a>
                                    </label>
                                </div>

                                <button
                                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    onClick={signUp}
                                >
                                    Crear Cuenta
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalLogin
                isVisible={isModalVisible}
                title={modalDetails.title}
                text={modalDetails.text}
                onClose={() => setIsModalVisible(false)}
            />
        </>
    );
}
