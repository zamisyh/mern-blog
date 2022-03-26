export const set = (name, token) => {
    return localStorage.setItem(name, token);

}

export const get = (name) => {
    return localStorage.getItem(name);
}

export const remove = (token) => {
    return localStorage.removeItem(token);
}