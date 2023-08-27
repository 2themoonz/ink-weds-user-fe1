// constants
import {
  API_RESPONSE_ERROR,
  API_RESPONSE_SUCCESS,
  LOGIN,
  LOGOUT,
  SIGNUP,
} from "./constants";

interface IAuthPayload {
  email: string;
  password: string;
}

interface ISignupPayload extends IAuthPayload {}

interface ILoginPayload extends IAuthPayload {}

// common success
export const authApiResponseSuccess = (actionType: string, data: any) => ({
  type: API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const authApiResponseError = (actionType: string, error: any) => ({
  type: API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const login = ({ email, password }: ILoginPayload) => ({
  type: LOGIN,
  payload: { email, password },
});

export const logout = () => ({
  type: LOGOUT,
  payload: {},
});

export const signup = ({ email, password }: ISignupPayload) => ({
  type: SIGNUP,
  payload: { email, password },
});
