import React, { useState } from "react";
export const AuthContext = React.createContext();

export const AuthContextProvider = ({children})=>{
     
    const [isAuth, setIsAuth] = useState(false)

    return(
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
