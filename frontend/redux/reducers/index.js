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
            const allcats = state.productos
            const PRODUNO = action.payload === "PRODUNO" ? allcats : allcats.filter((e) => e.categoria.includes("PRODUNO"))
            const PRODDOS = allcats.filter((e) => e.categoria.includes('PRODDOS'))

            //let pequeños = gente.filter(persona => persona.edad <= 3)
            console.log(PRODDOS)
            console.log(PRODUNO)
              return {
                ...state,
                filterProductos2: PRODDOS
              }

            case 'FILTER_BY_CATEGORY':
              console.log(action.payload)
              const allProductos = state.productos
              const fitrocategoria = action.payload === "All" ?
                  allProductos : allProductos.filter((e) => e.categoria.includes(action.payload))
                  return {
                    ...state,
                    filterProductos: fitrocategoria
                  }      
      default:
    return state
}
}

export default rootReducer