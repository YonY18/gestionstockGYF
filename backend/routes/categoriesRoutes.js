import express from 'express'
import {
    getCategoria,
    postCategoria
} from '../controllers/categoriesControllers.js'


const router = express.Router()

router
    .route('/')
    .get(getCategoria)
    .post(postCategoria)

export default router