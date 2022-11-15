import express from 'express'
import {
    deleteCategoria,
    getCategoria,
    postCategoria
} from '../controllers/categoriesControllers.js'


const router = express.Router()

router
    .route('/')
    .get(getCategoria)
    .post(postCategoria)
    .delete(deleteCategoria)

export default router