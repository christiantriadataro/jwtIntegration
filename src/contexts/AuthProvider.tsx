import {ReactNode, useEffect, useState} from "react";
import AuthContext, {TokenInitialState, TokenProps} from "./AuthContext.ts";

const AuthProvider = ({children}: { children: ReactNode }) => {
    const [token, setToken] = useState<TokenProps>(TokenInitialState)

    useEffect(() => {
        console.log("token: ", token)
    }, [token])

    return (
        <AuthContext.Provider value={{token, setToken}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider