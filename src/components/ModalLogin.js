const ModalLogin = ({ isVisible, title, text, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed inset-0 w-screen h-screen bg-black/40 z-50 flex items-center justify-center">
            <div className="flex flex-col bg-white rounded-3xl w-10/12 lg:w-1/2 p-4 h-fit">
                <h3 className="w-full text-center text-2xl">{title}</h3>
                <p className="w-full text-center">{text}</p>
                <button
                    onClick={onClose}
                    className="mt-8 m-auto bg-purple-600 p-2 text-white rounded-lg hover:bg-purple-700 hover:cursor-pointer"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};
export default ModalLogin;
