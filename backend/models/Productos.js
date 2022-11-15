import mongoose from 'mongoose'

const productoSchema = mongoose.Schema( 
{
        nombre: {
          type: String,
          trim: true,
          required: true
        },
        precio: {
            type: Number,
            min: 0, max: 1000000,
            required: true,
          },
        categoria: {
            type: mongoose.Schema.Types.String,
            required: true,
            ref: 'Categorias'
          },
        fecha_carga: {
            type: Date, 
            default: Date.now
        }
    },
    {
      timestamps: true,
    }
  )
const ProductoCreate = mongoose.model("Productos", productoSchema)
export default ProductoCreate