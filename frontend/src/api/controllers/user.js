import { get, put, post, del } from '../api';

export const registerUser = async (url, param) => {
    let res = await post(url, param);
    return res;
}