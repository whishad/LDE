import { getFromLocalStorage } from "./local_storarge_functions"

export const protectedRedirect = (navigate, path, reject) => { // redirect related to login
    if(reject(getFromLocalStorage("username"))) navigate(path)
}