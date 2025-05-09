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

## Ejecución

![image](https://github.com/user-attachments/assets/a7b44917-ebb3-4517-bfac-24c420dc6f14)

![image](https://github.com/user-attachments/assets/d799903d-27a3-4b53-a0a9-7937b9f5f2f6)

![image](https://github.com/user-attachments/assets/d68b58e8-ba1a-457c-9df0-85927cfa2cb1)

![image](https://github.com/user-attachments/assets/274eeaab-c4b2-4ec8-8cc3-b384f9266b39)

![image](https://github.com/user-attachments/assets/d2ac326e-64b0-4d9a-bbc1-1b9b76928cff)

![image](https://github.com/user-attachments/assets/09dd8ac1-1eca-47a9-9de0-f1d029592b9c)

![image](https://github.com/user-attachments/assets/31473c35-423f-4d24-b464-e0a1c127c768)

![image](https://github.com/user-attachments/assets/debe327c-5744-444e-8e55-65d8b00e0245)

![image](https://github.com/user-attachments/assets/bdd686c9-447b-4360-bff9-d3d727ca85e9)

## 👨‍💻 Autor

Manuel Alejandro Rodriguez Sanchez
