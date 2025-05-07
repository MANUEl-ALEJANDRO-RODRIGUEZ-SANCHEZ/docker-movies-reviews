import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

// app.use(
//     cors({
//         origin: "http://localhost:3000",
//     })
// );

app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL");
});

// ================= MOVIES =================

// Get all movies
app.get("/movies", (_, res) => {
    db.query("SELECT * FROM movies", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Get movie by ID
app.get("/movies/:id", (req, res) => {
    db.query(
        "SELECT * FROM movies WHERE id = ?",
        [req.params.id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length === 0)
                return res.status(404).json({ message: "Movie not found" });
            res.json(results[0]);
        }
    );
});

// Create movie
app.post("/movies", (req, res) => {
    const { title, image, rating, year, genre, details } = req.body;
    db.query(
        "INSERT INTO movies (title, image, rating, year, genre, details) VALUES (?, ?, ?, ?, ?, ?)",
        [title, image, rating, year, genre, details],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({
                id: result.insertId,
                title,
                image,
                rating,
                year,
                genre,
                details,
            });
        }
    );
});

// Update movie
app.put("/movies/:id", (req, res) => {
    const { title, image, rating, year, genre, details } = req.body;
    db.query(
        "UPDATE movies SET title=?, image=?, rating=?, year=?, genre=?, details=? WHERE id=?",
        [title, image, rating, year, genre, details, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Movie updated" });
        }
    );
});

// Delete movie
app.delete("/movies/:id", (req, res) => {
    db.query("DELETE FROM movies WHERE id=?", [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Movie deleted" });
    });
});

// ================= REVIEWS =================

// Get all reviews
app.get("/reviews", (_, res) => {
    db.query("SELECT * FROM reviews", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Get review by ID
app.get("/reviews/:id", (req, res) => {
    db.query(
        "SELECT * FROM reviews WHERE id=?",
        [req.params.id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length === 0)
                return res.status(404).json({ message: "Review not found" });
            res.json(results[0]);
        }
    );
});

// Create review
app.post("/reviews", (req, res) => {
    const { user, movie, movieId, comment, date } = req.body;
    db.query(
        "INSERT INTO reviews (user, movie, movieId, comment, date) VALUES (?, ?, ?, ?, ?)",
        [user, movie, movieId, comment, date],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({
                id: result.insertId,
                user,
                movie,
                movieId,
                comment,
                date,
            });
        }
    );
});

// Update review
app.put("/reviews/:id", (req, res) => {
    const { user, movie, movieId, comment, date } = req.body;
    db.query(
        "UPDATE reviews SET user=?, movie=?, movieId=?, comment=?, date=? WHERE id=?",
        [user, movie, movieId, comment, date, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Review updated" });
        }
    );
});

// Delete review
app.delete("/reviews/:id", (req, res) => {
    db.query("DELETE FROM reviews WHERE id=?", [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Review deleted" });
    });
});

// ================= USERS =================

// Get all users
app.get("/users", (_, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Get user by ID
app.get("/users/:id", (req, res) => {
    db.query(
        "SELECT * FROM users WHERE id=?",
        [req.params.id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length === 0)
                return res.status(404).json({ message: "User not found" });
            res.json(results[0]);
        }
    );
});

// Create user
app.post("/users", (req, res) => {
    const { name, email, password } = req.body;
    db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: result.insertId, name, email });
        }
    );
});

// Update user
app.put("/users/:id", (req, res) => {
    const { name, email, password } = req.body;
    db.query(
        "UPDATE users SET name=?, email=?, password=? WHERE id=?",
        [name, email, password, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "User updated" });
        }
    );
});

// Delete user
app.delete("/users/:id", (req, res) => {
    db.query("DELETE FROM users WHERE id=?", [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User deleted" });
    });
});

// ================= LOGIN =================

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });

            if (results.length === 0) {
                return res
                    .status(401)
                    .json({ message: "Credenciales inválidas" });
            }

            const user = results[0];
            res.json({
                message: "Inicio de sesión exitoso",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
            });
        }
    );
});

app.listen(4000, () => {
    console.log("API running on http://localhost:4000");
});
