import Categoria from '../models/Categoria.js'

const getCategoria = async (req, res) => {
  const categories = await Categoria.find(null)
  const mappedCategories = categories.map(e => e.nombre).sort((a, b) => a.localeCompare(b))
  res.json(mappedCategories)
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

const deleteCategoria = async (req, res) => {
  try {
    const { nombre } = req.body
    const categoriaID = await Categoria.findOneAndDelete({ nombre })
    res.json({ categoriaID })
  } catch (error) {
    console.log(error)
  }
}

export {
  postCategoria,
  getCategoria,
  deleteCategoria
}