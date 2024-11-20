import IAMInstance from "../axios/IAMInstance.ts";
import {IAM_LOGOUT_ENDPOINT} from "../constants/apiHeaders.ts";

const GetLogoutToken = () => {
    return IAMInstance.get(IAM_LOGOUT_ENDPOINT)
}