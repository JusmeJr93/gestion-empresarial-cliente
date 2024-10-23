import axios from "axios";

const API_URL = 'https://gestion-empresarial-servidor-4f5fab8b1039.herokuapp.com/api/empresas';
// const API_URL = 'http://localhost:3001/api/empresas';

export const obtenerEmpresas = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const agregarEmpresa = async (nuevaEmpresa) => {
    const response = await axios.post(API_URL, nuevaEmpresa);
    return response.data;
};

export const editarEmpresa = async (id, empresaEditada) => {
    const response = await axios.put(`${API_URL}/${id}`, empresaEditada);
    return response.data;
};

export const eliminarEmpresa = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};