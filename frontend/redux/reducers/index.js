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
            const valor = action.payload
            const PRODUNO = allcats ? allcats.filter((e) => e.categoria.includes("PRODUNO")) : null
            const PRODDOS = allcats ? allcats.filter((e) => e.categoria.includes("PRODDOS")) : null
            let PREUNO = PRODUNO.sort()
            let PREDOS = PRODDOS.sort()
            const PRESU = PRODUNO.filter((e) => e.precio <= valor);
            //const PRESU = PRODUNO ? PRODUNO.filter((e) => e.precio.includes(valor)) : null
 
            //var top10 = valoraciones.sort(function (a, b) { return b - a; }).slice(0, 10);
            //Math.max(valor0, valor1)
            //let pequeños = gente.filter(persona => persona.edad <= 3)
            console.log(allcats)
            console.log(PRODDOS)
            console.log(PRODUNO)
            console.log(PRESU)
            console.log(valor)
              return {
                ...state,
                filterProductos: PRESU
              }

            case 'FILTER_BY_CATEGORY':
              console.log(action.payload)
              const allProductos = state.productos
              const fitrocategoria = action.payload === "All" ?
                  allProductos : allProductos.filter((e) => e.categoria.includes(action.payload))
                  console.log(allProductos)
                  return {
                    ...state,
                    filterProductos: fitrocategoria
                  }      
      default:
    return state
}
}

export default rootReducer