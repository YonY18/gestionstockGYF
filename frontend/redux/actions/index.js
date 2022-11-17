import axios from "axios";



export function getAllProductos() {
  return async function (dispatch) {
    try {
      let{data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/productos`)
      return dispatch({
        type: 'GET_ALL_PRODUCTOS',
        payload: data
      })
      
    } catch (error) {
      alert(error.response.data.message)
    }
  };
}
export function getAllCategorias() {
  return async function (dispatch) {
    try {
      let{data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/categorias`)
      return dispatch({
        type: 'GET_ALL_CATEGORIAS',
        payload: data
      })
      
    } catch (error) {
      alert(error.response.data.message)
    }
  };
}
export function createProducto(producto) {
  return async function (dispatch) {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/productos`, producto);
      console.log(producto)
  } catch (error) {
    alert(error.response.data.message)
  }
  };
  }

export function filterPresu(payload) {
  return {
    type: 'FILTER_BY_PRESU',
    payload,
  }
}


export function filterByCategory(payload) {
      return {
        type: 'FILTER_BY_CATEGORY',
        payload,
      }
  }
