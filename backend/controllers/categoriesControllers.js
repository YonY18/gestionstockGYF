import Categoria from '../models/Categoria.js'

const getCategoria = async (req, res) => {
  const categorias = await Categoria.find()
  res.json(categorias)
}

const postCategoria = async (req, res) => {
  const categoria = new Categoria(req.body)
  try {
    const categoriaAlmacenado = await categoria.save()
    res.json(categoriaAlmacenado)
  } catch (error) {
    console.log(error)
  }
}



export {
  postCategoria,
  getCategoria,
}