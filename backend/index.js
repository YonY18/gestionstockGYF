import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import cors from "cors";

import categoriesRoutes from './routes/categoriesRoutes.js';
import productosRoutes from './routes/productosRoutes.js'

const app = express();

dotenv.config();
conectarDB();
app.use(express.json());
//cors
app.use(
    cors({
        origin: '*',
        credentials: true,
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'authorization',
        ],
    })
);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

//Ruteo

app.use("/api/categorias", categoriesRoutes);
app.use("/api/productos", productosRoutes)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});