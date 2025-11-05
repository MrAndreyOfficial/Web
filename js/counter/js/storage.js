export function saveDataLocal(key, data) {
    localStorage.setItem(key, data);
}

export function loadDataLocal(key) {
    return localStorage.getItem(key);
}
