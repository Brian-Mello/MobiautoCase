const initialState = {
    todasMarcas: [],
    marcaSelecionada: "",
    todosModelos:[],
    modeloSelecionado: "",
    todosAnos: [],
    anoSelecionado: "",
    valorVeiculo: {}
}

const tabelafipe = (state = initialState, action) => {
    switch(action.type){
        case "SET_MARCAS":
            const marcas = action.payload.marcas
            return {...state, todasMarcas: marcas};

        case "SET_MARCA": 
            const marca = action.payload.marca;
            return {...state, marcaSelecionada: marca};

        case "SET_MODELOS":
            const modelos = action.payload.modelos;
            return {...state, todosModelos: modelos};

        case "SET_MODELO":
            const modelo = action.payload.modelo;
            return {...state, modeloSelecionado: modelo};
            
        case "SET_ANOS":
            const anos = action.payload.anos;
            return {...state, todosAnos: anos};

        case "SET_ANO": 
            const ano = action.payload.ano;
            return {...state, anoSelecionado: ano};

        case "SET_VALOR":
            const valor = action.payload.valor;
            return {...state, valorVeiculo: valor};

        default:
            return state
    }
}

export default tabelafipe;  