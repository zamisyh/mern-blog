import axios from 'axios';


export const get = async (url) => {
    let result = await axios.get(url);
    return result;
}

export const post = async (url, param) => {
    let result = await axios.post(url, param);
    return result;
}

export const put = async (url, param) => {
    let result = await axios.put(url, param);
    return result;
}

export const del = async (url, param) => {
    let result = await axios.delete(url, param);
    return result;
}