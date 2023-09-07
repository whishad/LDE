export const setInLocalStorage = (key, value, func) => { //set key and value in localStorage
    localStorage.setItem(key, value)
    if(typeof(func) === "function") func()
}

export const getFromLocalStorage = (key) => { //get key and value from localStorage
    return localStorage.getItem(key)
}