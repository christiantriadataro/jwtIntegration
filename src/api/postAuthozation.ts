import IAMInstance from "../axios/IAMInstance.ts";
import {IAM_TOKEN_ENDPOINT} from "../constants/apiHeaders.ts";
import {AxiosResponse} from "axios";

interface ITokenProps {
    access_token: string;
    refresh_token: string;
    password: string;
    scope: string;
    token_type: string;
    expires_in: number;
    username: string;
}

const postAuthozation = async (params: URLSearchParams): Promise<AxiosResponse<ITokenProps>> => {
    return await IAMInstance.post(IAM_TOKEN_ENDPOINT, params)
}

export default postAuthozation