import React, {createContext, useEffect} from "react";
import {getLocalStorage, setLocalStorage} from "../components/others/LocalStorage.jsx";


setLocalStorage()
const {employees, admin} = getLocalStorage()
const data = {employees, admin}

export const AuthContext = createContext(data);

const AuthProvider = ({children}) => {


    return(
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}



export default AuthProvider