import {IENV} from "../types/env.ts";


const ENV = import.meta.env as unknown as IENV;

// client secret and ids
export const BNP_API_KEY = ENV.VITE_BNP_API_KEY || 'E9500BE27E06BC2BAD26BA3833881BE6BED9E86E6F5EC3F0F6C3E95ECDDF8B37';
export const CLIENT_SECRET =
    ENV.VITE_IAM_CLIENT_SECRET ||
    'NmJkYjBkYzctOWNkNS00ODdlLThjZmYtNmRiZmI4YjI2NDQ2OjU5Mzc0ZjNlLWMzYTctNGJhYS1hOWE0LTkxMDgzZjdhYzE0Mg==';

// base urls
export const IAM_BASE_URL = ENV.VITE_IAM_BASE_URL || 'https://id-dev.item.pub';
export const BNP_BASE_URL = ENV.VITE_BNP_BASE_URL || 'https://bnp-test.item.pub';
// endpoints

// IAM endpoints
export const IAM_TOKEN_ENDPOINT = ENV.VITE_IAM_TOKEN_ENDPOINT || '/oauth2/token';
export const IAM_LOGOUT_ENDPOINT = ENV.VITE_IAM_LOGOUT_ENDPOINT || 'oauth2/logout';
export const IAM_RESET_PASSWORD_WITH_CODE_ENDPOINT =
    ENV.VITE_IAM_RESET_PASSWORD_WITH_CODE_ENDPOINT || '/user/password-reset-with-code';
export const IAM_VALIDATE_CODE_FOR_PASSWORD_RESET_ENDPOINT =
    ENV.VITE_IAM_VALIDATE_CODE_FOR_PASSWORD_RESET_ENDPOINT || '/user/password-reset/validate-verification-code';
export const IAM_CODE_FOR_PASSWORD_RESET_ENDPOINT =
    ENV.VITE_IAM_CODE_FOR_PASSWORD_RESET_ENDPOINT || '/user/password-reset/send-verification-code-email';

export const VITE_BNP_INVOICE_ENDPOINT =
    ENV.VITE_BNP_INVOICE_ENDPOINT || '/PayAndBillAPI/api/invoice/GetALLInvoiceByParameters';
