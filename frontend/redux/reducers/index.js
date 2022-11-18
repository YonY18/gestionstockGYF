const initialState = {
  filterProductos: [],
  filterProductos2: [],
  productos: [],
  categorias: []

}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_PRODUCTOS':
      return {
        ...state,
        filterProductos: action.payload,
        productos: action.payload,
      }
    case 'GET_ALL_CATEGORIAS':
      return {
        ...state,
        categorias: action.payload,
      }

    case 'FILTER_BY_PRESU':
      const allprod = state.productos
      const presupuesto = action.payload
      const arrayFilter = allprod.filter((item) => item.precio <= presupuesto);
      const arraySort = arrayFilter.sort((a, b) => b.precio - a.precio);
      const arrayMap = arraySort.map((item) => item.categoria);
      let valores = arrayMap.map(e => {
        return arraySort.find((item) => item.categoria === e && item.precio <= presupuesto * 0.55);
      });
      const valoresUnicos = valores.filter((item, index) => valores.indexOf(item) === index);

      return {
        ...state,
        filterProductos: valoresUnicos
      }

    case 'FILTER_BY_CATEGORY':
      //console.log(action.payload)
      const allProductos = state.productos
      const fitrocategoria = action.payload === "All" ?
        allProductos : allProductos.filter((e) => e.categoria.includes(action.payload))
      //console.log(allProductos)
      return {
        ...state,
        filterProductos: fitrocategoria
      }
    default:
      return state
  }
}

export default rootReducer