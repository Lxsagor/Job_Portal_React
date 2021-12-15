import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SET_ACTIVE_STEP, SET_FORGET_USER_DATA, SET_LOGIN_DATA, SET_REGISTER_DATA, SET_RESEND_CODE_DATA, SET_VALIDATATION_ERROR } from "./type";

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
