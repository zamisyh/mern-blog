import { get, post, put, del } from '../api';
const base_url = process.env.REACT_APP_API_URL;

export const getAllArticles = async (url) => {
    return await get(url);
}

export const getArticleByName = async (url) => {
    return await get(url);
}