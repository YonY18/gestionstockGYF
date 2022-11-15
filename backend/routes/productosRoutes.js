import express from 'express'
import {
    postProducto,
    getProductos
} from '../controllers/productosControllers.js'

const router = express.Router()

router
    .route('/')
    .post(postProducto)
    .get(getProductos)

export default router