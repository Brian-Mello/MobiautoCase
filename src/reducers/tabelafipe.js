const initialState = {
    todasMarcas: [],
    todosModelos:[],
    todosAnos: [],
    valorVeiculo: {}
}

const tabelafipe = (state = initialState, action) => {
    switch(action.type){
        case "SET_MARCAS":
            const marcas = action.payload.marcas
            return {...state, todasMarcas: marcas};

        case "SET_MODELOS":
            const modelos = action.payload.modelos;
            return {...state, todosModelos: modelos};
            
        case "SET_ANOS":
            const anos = action.payload.anos;
            return {...state, todosAnos: anos};

        case "SET_VALOR":
            const valor = action.payload.valor;
            return {...state, valorVeiculo: valor};

        default:
            return state
    }
}

export default tabelafipe;  