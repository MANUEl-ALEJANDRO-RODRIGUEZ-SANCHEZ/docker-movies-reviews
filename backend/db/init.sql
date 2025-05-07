CREATE DATABASE IF NOT EXISTS movie_reviews;
USE movie_reviews;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  image VARCHAR(255),
  rating FLOAT,
  year INT,
  genre VARCHAR(100),
  details TEXT
);

CREATE TABLE IF NOT EXISTS reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user VARCHAR(100),
  movie VARCHAR(100),
  movieId INT,
  rating FLOAT,
  comment TEXT,
  date DATE,
  FOREIGN KEY (movieId) REFERENCES movies(id)
);

INSERT IGNORE INTO movies (id, title, image, rating, year, genre, details) VALUES
(1, 'The Shawshank Redemption', 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', 9.3, 1994, 'Drama', 'Andy Dufresne, un banquero condenado por el asesinato de su esposa y su amante, encuentra esperanza y redención durante su tiempo en la prisión de Shawshank.'),
(2, 'The Godfather', 'https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg', 9.2, 1972, 'Crime', 'La historia de la familia mafiosa Corleone, liderada por Vito Corleone, y la transformación de su hijo Michael en el nuevo Don.'),
(3, 'The Dark Knight', 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', 9.0, 2008, 'Action', 'Batman enfrenta al Joker, un criminal caótico que busca sumir a Gotham en la anarquía y desafiar los límites morales del Caballero Oscuro.'),
(4, 'Pulp Fiction', 'https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg', 8.9, 1994, 'Crime', 'Una serie de historias entrelazadas que siguen a dos asesinos a sueldo, un boxeador, la esposa de un gánster y una pareja de ladrones en Los Ángeles.'),
(5, 'Forrest Gump', 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg', 8.8, 1994, 'Drama', 'Forrest Gump, un hombre con un coeficiente intelectual bajo, presencia y participa en varios eventos históricos de EE. UU., demostrando que cualquiera puede dejar su huella.'),
(6, 'Inception', 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg', 8.7, 2010, 'Sci-Fi', 'Dom Cobb, un ladrón especializado en extraer secretos del subconsciente, es contratado para implantar una idea en la mente de un heredero empresarial.'),
(7, 'Fight Club', 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg', 8.8, 1999, 'Drama', 'Un oficinista insomne forma un club de lucha clandestino con un vendedor de jabón, lo que desencadena una espiral de caos y autodescubrimiento.'),
(8, 'Interstellar', 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg', 8.6, 2014, 'Adventure', 'En un futuro donde la Tierra es inhabitable, un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.'),
(9, 'The Matrix', 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', 8.7, 1999, 'Sci-Fi', 'Neo descubre que la realidad que conoce es una simulación creada por máquinas y se une a la resistencia para liberar a la humanidad.'),
(10, 'Gladiator', 'https://image.tmdb.org/t/p/w500/pRn3TJHbAqCAO7V1Zb7k6Tpu2c8.jpg', 8.5, 2000, 'Action', 'Maximus, un general romano traicionado, se convierte en gladiador y busca vengar la muerte de su familia y del emperador Marco Aurelio.'),
(11, 'The Lord of the Rings: The Return of the King', 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg', 8.9, 2003, 'Fantasy', 'Frodo y Sam se acercan al Monte del Destino mientras la guerra por la Tierra Media alcanza su clímax en la batalla final contra Sauron.'),
(12, 'The Empire Strikes Back', 'https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg', 8.7, 1980, 'Sci-Fi', 'Mientras el Imperio persigue a los rebeldes, Luke Skywalker recibe entrenamiento Jedi con Yoda y descubre la verdad sobre su padre.'),
(13, 'The Lord of the Rings: The Fellowship of the Ring', 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg', 8.8, 2001, 'Fantasy', 'Un joven hobbit, Frodo, recibe la misión de destruir el Anillo Único y evitar que el señor oscuro Sauron recupere su poder.'),
(14, 'Star Wars', 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', 8.6, 1977, 'Sci-Fi', 'Luke Skywalker une fuerzas con un Jedi, un contrabandista y una princesa para derrotar al Imperio Galáctico y salvar a la galaxia.'),
(15, 'The Lord of the Rings: The Two Towers', 'https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg', 8.7, 2002, 'Fantasy', 'Mientras Frodo y Sam continúan su viaje, Aragorn, Legolas y Gimli luchan en la batalla del Abismo de Helm contra los ejércitos de Saruman.'),
(16, 'Goodfellas', 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg', 8.7, 1990, 'Crime', 'Henry Hill narra su vida en la mafia, desde sus inicios hasta su caída como testigo protegido después de traicionar a sus socios.'),
(17, 'One Flew Over the Cuckoo''s Nest', 'https://image.tmdb.org/t/p/w500/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg', 8.7, 1975, 'Drama', 'Randle McMurphy finge estar loco para evitar la cárcel y termina en un hospital psiquiátrico, donde desafía a la opresiva enfermera Ratched.'),
(18, 'Seven Samurai', 'https://image.tmdb.org/t/p/w500/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg', 8.6, 1954, 'Adventure', 'Un grupo de samuráis es contratado por campesinos para defender su aldea de bandidos en esta épica historia japonesa de honor y sacrificio.'),
(19, 'Se7en', 'https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg', 8.6, 1995, 'Crime', 'Dos detectives persiguen a un asesino serial que utiliza los siete pecados capitales como motivo para sus atroces crímenes.'),
(20, 'It''s a Wonderful Life', 'https://image.tmdb.org/t/p/w500/b1nHgk4q1IAa87mXzLHgzUAwx4n.jpg', 8.6, 1946, 'Drama', 'George Bailey, al borde del suicidio, es salvado por un ángel que le muestra cómo sería la vida de los demás si él no hubiera nacido.'),
(21, 'Life Is Beautiful', 'https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6esUVaeISa2.jpg', 8.6, 1997, 'Comedy', 'Durante la Segunda Guerra Mundial, un padre usa su imaginación para proteger a su hijo de los horrores del campo de concentración.'),
(22, 'The Silence of the Lambs', 'https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg', 8.6, 1991, 'Thriller', 'Una joven agente del FBI recurre a un brillante pero peligroso asesino en serie, el Dr. Hannibal Lecter, para atrapar a otro criminal.'),
(23, 'Saving Private Ryan', 'https://image.tmdb.org/t/p/w500/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg', 8.6, 1998, 'War', 'Durante la invasión de Normandía, un grupo de soldados es enviado tras las líneas enemigas para rescatar a un paracaidista cuyo hermanos han muerto en combate.'),
(24, 'Interstellar', 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', 8.6, 2014, 'Sci-Fi', 'Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad mientras el tiempo se agota en la Tierra.'),
(25, 'The Green Mile', 'https://image.tmdb.org/t/p/w500/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg', 8.6, 1999, 'Drama', 'Un guardia de prisión descubre que uno de los condenados a muerte posee poderes sobrenaturales que desafían su visión de la justicia.'),
(26, 'The Usual Suspects', 'https://image.tmdb.org/t/p/w500/bUPmtQzrRhzqYySeiMpv7GurAfm.jpg', 8.5, 1995, 'Crime', 'Cinco criminales se reúnen en una rueda de reconocimiento y terminan envueltos en una conspiración dirigida por un misterioso cerebro criminal: Keyser Söze.'),
(27, 'Léon: The Professional', 'https://image.tmdb.org/t/p/w500/pY8z1nXHM1AdGJ7td3cDnBxwzPZ.jpg', 8.5, 1994, 'Action', 'Un asesino a sueldo forma una insólita relación con una joven cuya familia fue asesinada, y comienza a entrenarla en su oficio.'),
(28, 'Harakiri', 'https://image.tmdb.org/t/p/w500/cfXTgAVxZGMkWywogECga2mQGFF.jpg', 8.6, 1962, 'Drama', 'En el Japón feudal, un samurái llega a la mansión de un clan para pedir realizar seppuku, revelando una historia de venganza y tragedia.');

INSERT IGNORE INTO reviews (id, user, movie, movieId, rating, comment, date) VALUES
(1, 'alice', 'The Shawshank Redemption', 1, 5, 'Una obra maestra absoluta.', '2024-10-21'),
(2, 'bob', 'The Godfather', 2, 5, 'Simplemente icónica.', '2024-09-12'),
(3, 'carol', 'The Dark Knight', 3, 4, 'Gran actuación de Heath Ledger.', '2025-01-03'),
(4, 'dave', 'Pulp Fiction', 4, 5, 'Quentin en su mejor momento.', '2024-11-28'),
(5, 'erin', 'Forrest Gump', 5, 5, 'Inspiradora y conmovedora.', '2024-12-18'),
(6, 'frank', 'Inception', 6, 4, 'Brillante pero algo confusa.', '2025-01-12'),
(7, 'grace', 'Fight Club', 7, 5, 'Impresionante giro final.', '2025-02-03'),
(8, 'hank', 'The Matrix', 8, 5, 'Revolucionaria en todos los sentidos.', '2024-10-05'),
(9, 'ivy', 'Goodfellas', 9, 4, 'Excelente cine de mafiosos.', '2025-03-15'),
(10, 'jack', 'The Lord of the Rings: The Return of the King', 10, 5, 'Épica conclusión.', '2024-08-10'),
(11, 'alice', 'Interstellar', 11, 5, 'Una odisea emocional.', '2024-11-02'),
(12, 'bob', 'Se7en', 12, 4, 'Oscura y atrapante.', '2024-09-30'),
(13, 'carol', 'The Silence of the Lambs', 13, 5, 'Terror psicológico de primer nivel.', '2025-01-20'),
(14, 'dave', 'Saving Private Ryan', 14, 5, 'Impactante desde el principio.', '2024-12-25'),
(15, 'erin', 'The Green Mile', 15, 5, 'Llena de emociones.', '2025-01-15'),
(16, 'frank', 'The Lion King', 16, 5, 'Clásico de la infancia.', '2024-08-22'),
(17, 'grace', 'The Usual Suspects', 17, 4, 'Final brillante.', '2025-02-01'),
(18, 'hank', 'Gladiator', 18, 4, 'Intensa y bien dirigida.', '2024-10-17'),
(19, 'ivy', 'Whiplash', 19, 5, 'Intensa y poderosa.', '2024-11-10'),
(20, 'jack', 'The Prestige', 20, 5, 'Trucos y secretos bien guardados.', '2025-01-27');
