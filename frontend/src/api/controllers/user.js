import { get, put, post, del } from '../api';

export const registerUser = async (url, param) => {
    let res = await post(url, param);
    return res;
}

export const loginUser = async (url, param) => {
    let res = await post(url, param);
    return res;
}

export const getUserLogin = async (url, param, token) => {
    let res = await post(url, param, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    return res.data;
}

export const getUserId = async (url, param) => {
    let res = await post(url, param);
    return res.data;
}

export const addUser = async (url, param, token) => {
    let res = await post(url, param, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    return res.data
}