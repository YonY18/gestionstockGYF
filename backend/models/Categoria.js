import mongoose from 'mongoose'

const categoriaSchema = mongoose.Schema( 
    {
            nombre: {
              type: String,
              trim: true,
              required: true
            },
        },
        {
            timestamps: true,
        }
    );
    const CategoriaCreate = mongoose.model("Categorias", categoriaSchema)
    export default CategoriaCreate