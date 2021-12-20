import {
    SET_ACTIVE_STEP,
    SET_FORGET_USER_DATA,
    SET_LOGIN_DATA,
    SET_REGISTER_DATA,
    SET_VALIDATATION_ERROR,
    PROFILE_FIELD_CHANGE,
    SET_PROFILE_BASIC_DETAILS,
} from "../Action/type";

const initialState = {
    registerData: null,
    errorData: {
        first_name: { text: "", show: false },
        last_name: { text: "", show: false },
        fathers_name: { text: "", show: false },
        mothers_name: { text: "", show: false },
        date_of_birth: { text: "", show: false },
        religion: { text: "", show: false },
        gender: { text: "", show: false },
        marital_status: { text: "", show: false },
        nationality: { text: "", show: false },
        nid: { text: "", show: false },
        passport_no: { text: "", show: false },
        blood_group: { text: "", show: false },
    },
    activeStep: 0,
    forgetUserData: {},
    profileForm: {
        first_name: "",
        last_name: "",
        fathers_name: "",
        mothers_name: "",
        date_of_birth: null,
        religion: "",
        gender: "",
        marital_status: "",
        nationality: "",
        nid: "",
        passport_no: "",
        blood_group: "",
        present_district: "",
        present_thana: "",
        present_p_o: "",
        present_house_road_vill: "",
        permanent_district: "",
        permanent_thana: "",
        permanent_p_o: "",
        permanent_house_road_vill: "",
    },
    profileAddress: {
        present_district: "",
        present_thana: "",
        present_p_o: "",
        present_house_road_vill: "",
        permanent_district: "",
        permanent_thana: "",
        permanent_p_o: "",
        permanent_house_road_vill: "",
    },
    loginData: {},
    profileBasicData: {},
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
        case SET_PROFILE_BASIC_DETAILS:
            return {
                ...state,
                profileBasicData: action.payload,
            };
        case PROFILE_FIELD_CHANGE:
            return {
                ...state,
                profileForm: {
                    ...state.profileForm,
                    [action.payload.field]: action.payload.value,
                },
            };

        default:
            return state;
    }
};
export default AuthReducer;
