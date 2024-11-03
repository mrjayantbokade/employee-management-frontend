import React, {createContext} from "react";
import {getLocalStorage} from "../components/others/LocalStorage.jsx";
// import {getLocalStorage, setLocalStorage} from "../components/others/LocalStorage.jsx";


const {employees, admin} = getLocalStorage()
const data = {employees, admin}

export const AuthContext = createContext(data);

const AuthProvider = ({children}) => {
    // useEffect(
    //     setLocalStorage()
    //     getLocalStorage()
    // )


    return(
        <div>
            {children}
        </div>
    )
}



export default AuthProvider