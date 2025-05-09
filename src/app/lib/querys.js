export const registerUser = async (user) => {
    const { name, email, password } = user;

    try {
        const res = await fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (res.status !== 201) throw new Error("Request failed");

        console.log("Usuario registrado correctamente");
        return true;
    } catch (error) {
        console.error("Error al registrar usuario:", error.message);
        return false;
    }
};

export const loginUser = async (user) => {
    const { email, password } = user;
    try {
        const res = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok || res.status === 500 || res.status === 401)
            throw new Error("Error al iniciar sesión");

        return true;
    } catch (err) {
        console.error("Login error:", err.message);
        return false;
    }
};

export const getAllMovies = async () => {
    try {
        const response = await fetch("http://localhost:4000/movies");
        if (!response.ok || response.status === 500) {
            throw new Error("Error al obtener las películas");
        }
        const movies = await response.json();
        return movies;
    } catch (error) {
        console.error("Error:", error.message);
        return false;
    }
};

export const getAllReviews = async () => {
    try {
        const response = await fetch("http://localhost:4000/reviews");
        if (!response.ok || response.status === 500) {
            throw new Error("Error al obtener las reseñas");
        }
        const reviews = await response.json();
        return reviews;
    } catch (error) {
        console.error("Error:", error.message);
        return false;
    }
};

export const addReview = async (newReview) => {
    const { user, movie, movieId, rating, comment, date } = newReview;
    try {
        const res = await fetch("http://localhost:4000/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user,
                movie,
                movieId,
                rating,
                comment,
                date,
            }),
        });

        if (!res.ok || res.status === 500 || res.status === 401)
            throw new Error("Error al crear una reseña");

        return true;
    } catch (err) {
        console.error("Review error:", err.message);
        return false;
    }
};
