import {
    SET_ACTIVE_STEP, SET_FORGET_USER_DATA,
    SET_LOGIN_DATA, SET_REGISTER_DATA,
    SET_VALIDATATION_ERROR
} from "../Action/type";

const initialState = {
    registerData: null,
    errorData: {},
    activeStep: 0,
    forgetUserData: {},
    // resendcode: {},
    loginData: {},
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTER_DATA:
            return {
                ...state,
                registerData: action.payload,
            };
        case SET_VALIDATATION_ERROR:
            return {
                ...state,
                errorData: action.payload,
            };
        case SET_ACTIVE_STEP:
            return {
                ...state,
                activeStep: action.payload,
            };
        // case SET_RESEND_CODE_DATA:
        //     return {
        //         ...state,
        //         resendcode: action.payload,
        //     };
        case SET_LOGIN_DATA:
            return {
                ...state,
                loginData: action.payload,
            };
        case SET_FORGET_USER_DATA:
            return {
                ...state,
                forgetUserData: action.payload,
            };

        default:
            return state;
    }
};
export default AuthReducer;
