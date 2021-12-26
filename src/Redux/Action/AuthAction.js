import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    FETCH_USER_PROFILE_FORM,
    PROFILE_FIELD_CHANGE,
    SET_ACTIVE_STEP,
    SET_FORGET_USER_DATA,
    SET_LOGIN_DATA,
    SET_REGISTER_DATA,
    SET_RESEND_CODE_DATA,
    SET_VALIDATATION_ERROR,
    SET_UPDATE_VALIDATATION_ERROR,
} from "./type";

toast.configure();

export const register =
    (data, cb = () => {}) =>
    (dispatch) => {
        fetch("http://localhost:8000/api/v1/user/register", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === "success") {
                    dispatch({
                        type: SET_REGISTER_DATA,
                        payload: response.data,
                    });
                    toast.success("Successfully Registered");

                    dispatch({
                        type: SET_ACTIVE_STEP,
                        payload: 1,
                    });
                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: {},
                    });
                    cb();
                } else if (response.status === "validation_error") {
                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: response.data,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
export const verify =
    (data, cb = () => {}) =>
    (dispatch) => {
        fetch("http://localhost:8000/api/v1/user/verify_email", {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === "success") {
                    toast.success(response.message);
                    dispatch({
                        type: SET_REGISTER_DATA,
                        payload: response.data,
                    });

                    dispatch({
                        type: SET_ACTIVE_STEP,
                        payload: 2,
                    });
                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: {},
                    });
                    cb();
                } else if (response.status === "validation_error") {
                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: response.data,
                    });

                    toast.error(response.message);
                } else if (response.status === "error") {
                    toast.error(response.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
export const resend =
    (data, cb = () => {}) =>
    (dispatch) => {
        fetch("http://localhost:8000/api/v1/user/resend_code", {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === "success") {
                    dispatch({
                        type: SET_RESEND_CODE_DATA,
                        payload: response.message,
                    });
                    toast.success(response.message);

                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

export const login =
    (data, cb = () => {}) =>
    (dispatch) => {
        fetch("http://localhost:8000/api/v1/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.status === "success") {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("user", response.data.user.name);
                    dispatch({
                        type: SET_LOGIN_DATA,
                        payload: response.data,
                    });
                    toast.success("You Logged in Successfully!");
                    dispatch({
                        type: FETCH_USER_PROFILE_FORM,
                        payload: response.data.user.user_info,
                    });

                    cb();
                } else if (response.status === "validation_error") {
                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: response.data,
                    });

                    toast.error(response.message);
                } else if (response.status === "error") {
                    toast.error(response.message);
                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: {},
                    });
                } else if (response.status === "pending") {
                    toast.error(response.message);
                    dispatch({
                        type: SET_REGISTER_DATA,
                        payload: response.data,
                    });
                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: {},
                    });
                }

                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };
export const forget =
    (data, cb = () => {}) =>
    (dispatch) => {
        fetch("http://localhost:8000/api/v1/user/forget", {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === "success") {
                    dispatch({
                        type: SET_FORGET_USER_DATA,
                        payload: response.data,
                    });
                    toast.success("Code send Successfully!");

                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: {},
                    });
                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                } else if (response.status === "validation_error") {
                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: response.data,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
export const confirmForgetPass =
    (data, cb = () => {}) =>
    (dispatch) => {
        fetch("http://localhost:8000/api/v1/user/verifyForgetPass", {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === "success") {
                    toast.success("Verification Confirmed!");

                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: {},
                    });
                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                } else if (response.status === "validation_error") {
                    toast.error(response.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

export const changePassword =
    (data, cb = () => {}) =>
    (dispatch) => {
        fetch("http://localhost:8000/api/v1/user/changePassword", {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === "success") {
                    toast.success(response.message);

                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: {},
                    });
                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                } else if (response.status === "validation_error") {
                    dispatch({
                        type: SET_VALIDATATION_ERROR,
                        payload: response.data,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
export const fieldChangeHandler = (field, value) => ({
    type: PROFILE_FIELD_CHANGE,
    payload: {
        field: field,
        value: value,
    },
});

export const updateProfileInfo =
    (data, cb = () => {}) =>
    (dispatch, getStore) => {
        const { updateerrorData } = getStore().auth;
        fetch("http://localhost:8000/api/v1/user/update_basic_info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === "success") {
                    dispatch({
                        type: SET_UPDATE_VALIDATATION_ERROR,
                        payload: {
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
                            primary_mobile: { text: "", show: false },
                            primary_email: { text: "", show: false },
                            summary_yourself: { text: "", show: false },
                            github_link: { text: "", show: false },
                            linkedin_link: { text: "", show: false },
                        },
                    });
                    cb();
                } else if (response.status === "validation_error") {
                    let items = { ...updateerrorData };
                    Object.keys(response.data).forEach((key) => {
                        items[key] = {
                            text: response.data[key][0],
                            show: true,
                        };
                    });
                    dispatch({
                        type: SET_UPDATE_VALIDATATION_ERROR,
                        payload: items,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
