import axios from 'axios';

const baseUrl = "https://parallelum.com.br/fipe/api/v1/carros"

export const setMarcas = (marcas) => ({
    type: "SET_MARCAS",
    payload: {
        marcas,
    }
})

export const getMarcas = () => async (dispatch) => {
    try{
        const response = await axios.get(`${baseUrl}/marcas`);
        dispatch(setMarcas(response.data));
    } catch(err) {
        window.alert("erro ao pegar as marcas!")
    }
}

export const setModelos = (modelos) => ({
    type: "SET_MODELOS",
    payload: {
        modelos
    }
})

export const getModelos = (marca) => async (dispatch) => {
    try{
        const response = await axios.get(`${baseUrl}/marcas/${marca}/modelos`);
        dispatch(setModelos(response.data.modelos));
    } catch(err) {
        window.alert("erro ao pegar os modelos!")
    }
}

export const setAnos = (anos) => ({
    type: "SET_ANOS",
    payload: {
        anos
    }
})

export const getAnos = (marca, modelo) => async (dispatch) => {
    try{
        const response = await axios.get(`${baseUrl}/marcas/${marca}/modelos/${modelo}/anos`);
        dispatch(setAnos(response.data));
    } catch(err) {
        window.alert("erro ao pegar os anos!")
    }
}

export const setValor = (valor) => ({
    type: "SET_VALOR",
    payload: {
        valor
    }
})

export const getValor = (marca, modelo, ano) => async (dispatch) => {

    try{
        const response = await axios.get(`${baseUrl}/marcas/${marca}/modelos/${modelo}/anos/${ano}`);
        dispatch(setValor(response.data));
    } catch(err) {
        window.alert("erro ao pegar ao pegar o valor!")
    }
}