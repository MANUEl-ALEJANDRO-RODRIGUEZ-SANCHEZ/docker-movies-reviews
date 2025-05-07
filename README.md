# 🎬 **CineReview**

Aplicación web para consultar y realizar reseñas de peliculas

## 🚀 Características principales

Programa hecho con el fin de demostrar el funcionamiento de docker contando con las siguientes caracteristicas

-   ✅ Contenedores independientes para la base de datos y el backend
-   💾 Volumenes para la persistencia de datos
-   🔗 Endpoints para conectar el frontend con la base de datos para consultar, crear, eliminar, etc. peliculas y reseñas, ademas de manejar el registro de usuarios y sus incio de sesiones
-   🎨 Interfaz grafica agradable

## 🧰 Tecnologias empleadas:

-   🐳 Docker: Para crear contenedores para la base de datos y el backend
-   🗄️ MySQL: Para la base de datos relacional donde se almacenan las peliculas y reseñas
-   ⚙️ NodeJS: Backend para la creacion de endpoints
-   ⚡ NextJS: Para interfaz grafica reactiva

**Nota:** Esta aplicación solo esta hecha para demostrar el funcionamiento de docker, por lo que carece de caracteristicas de seguridad como tokens, hasheo o encriptación, validaciones, etc.

## 🧪 Como ejecutar el programa

1. Para ejecutar este programa debes tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop/) en tu computadora, ademas de tenerlo abierto en segundo plano durante la ejecución

2. Despues debes clonar este repositorio

```bash
git clone ...
```

3. Una vez teniendo el proyecto en tu computador debemos abrir una terminal para ejecutar los siguientes comandos en las siguientes ubicaciones

En cualquier directorio, para crear una red de docker

```bash
docker network create movie-network
```

En la carperta backend/db dentro del proyecto para crear y ejecutar el contenedor de la base de datos

```bash
docker-compose up -d
```

En la carperta backend/api dentro del proyecto para crear y ejecutar el contenedor del backend

```bash
docker build -t movie-api .
```

```bash
docker run -d --name api-container --env-file .env --network movie-network -p 4000:4000 movie-api
```

En cualquier directorio, para verificar la ejecución de los contenedores

```bash
docker ps
```

En cualquier directorio, para ver la salida de consola del backend

```bash
docker logs api-container
```

En la raiz de nuestro proyecto clonado para ejecutar el frontend

```bash
npm run dev
```

4. Abrir el proyecto en el navegador [http://localhost:3000](http://localhost:3000)

## 👨‍💻 Autor

Manuel Alejandro Rodriguez Sanchez
