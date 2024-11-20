import {createContext, Dispatch, SetStateAction} from "react";

export type TokenProps = {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

interface AuthContextProps {
    token: TokenProps;
    setToken: Dispatch<SetStateAction<TokenProps>>;
}

export const TokenInitialState = {
    accessToken: '',
    refreshToken: '',
    expiresIn: 0,
}

export const AuthContextInitialState = {
    token: TokenInitialState,
    setToken: () => {}
};

const AuthContext = createContext<AuthContextProps>(AuthContextInitialState)

export default AuthContext;