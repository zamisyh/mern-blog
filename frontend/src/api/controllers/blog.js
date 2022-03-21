import { get, post, put, del } from '../api';
const base_url = process.env.REACT_APP_API_URL;

export const getAllArticles = async (url) => {
    let res =  await get(url);
    return res.data;
}

export const getArticleByName = async (url) => {
    let res = await get(url);
    return res.data;
}

export const getOtherArticles = async (url) => {
    let res = await get(url);
    return res.data;
}