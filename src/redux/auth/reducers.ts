import {
  API_RESPONSE_ERROR,
  API_RESPONSE_SUCCESS,
  LOGIN,
  LOGOUT,
  SIGNUP,
} from "./constants";

const INIT_STATE = {
  user: null,
  loading: false,
};

const Auth = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case LOGIN: {
          return {
            ...state,
            user: action.payload.data,
            loading: false,
          };
        }
        case SIGNUP: {
          return {
            ...state,
            user: action.payload.data,
            loading: false,
          };
        }
        case LOGOUT: {
          return {
            ...state,
            user: null,
          };
        }
        default:
          return { ...state };
      }

    case API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case LOGIN: {
          return {
            ...state,
            error: action.payload.error,
            loading: false,
          };
        }
        case SIGNUP: {
          return {
            ...state,
            error: action.payload.error,
            loading: false,
          };
        }
        case LOGOUT: {
          return {
            ...state,
            error: action.payload.error,
            loading: false,
          };
        }
        default:
          return { ...state };
      }

    case LOGIN:
      return { ...state, loading: true };
    case SIGNUP:
      return { ...state, loading: true };
    case LOGOUT:
      return { ...state, loading: true };

    default:
      return { ...state };
  }
};

export default Auth;
