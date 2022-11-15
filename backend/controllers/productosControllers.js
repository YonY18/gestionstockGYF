import Producto from '../models/Productos.js'

const postProducto = async (req, res) => {
    const producto = new Producto(req.body)
    try {
      const productoAlmacenado = await producto.save()
      res.json(productoAlmacenado)
    } catch (error) {
      console.log(error)
    }
  }
  const getProductos = async (req, res) => {
    const productos = await Producto.find()
    res.json(productos)
  }


  export {
    postProducto,
    getProductos
  }