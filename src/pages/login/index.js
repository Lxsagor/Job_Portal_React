import { useStyles } from "./style";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Action/AuthAction.js";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const { errorData, registerData } = useSelector((state) => state.auth);
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        err_list: {
            email: { text: "", show: false },
            password: { text: "", show: false },
        },
    });
    const fieldChangeHandler = (field, value) => {
        setInputValue((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const newRecord = { ...inputValue };

        dispatch(
            login(newRecord, () => {
                navigate("/profile");
                console.log(newRecord);
            })
        );
    };
    useEffect(() => {
        if (errorData && Object.keys(errorData).length > 0) {
            Object.keys(errorData).forEach((key) => {
                setInputValue((prevState) => ({
                    ...prevState,
                    err_list: {
                        ...prevState.err_list,
                        [key]: { text: errorData[key][0], show: true },
                    },
                }));
            });
        }
    }, [errorData]);

    useEffect(() => {
        if (registerData) {
            navigate("/verify");
        }
    }, [registerData]);

    return (
        <form onSubmit={handleSubmit}>
            <Box className={classes.Loginbackground} spacing={5}>
                <Grid container justifyContent="right">
                    <Grid
                        item
                        lg={6}
                        md={10}
                        sm={10}
                        xs={12}
                        textAlign="center"
                    >
                        <Grid item>
                            <Typography
                                variant={"h3"}
                                style={{
                                    color: "rgb(33, 150, 243)",
                                    marginBottom: "20px",
                                    marginRight: "30px",
                                }}
                            >
                                Login
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="center" spacing={8}>
                            <Grid item lg={7} md={5}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={(e) =>
                                        fieldChangeHandler(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                    value={inputValue.email}
                                    error={inputValue.err_list.email.show}
                                    helperText={inputValue.err_list.email.text}
                                    style={{
                                        background: "rgba(216, 216, 216, .3)",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center" spacing={8}>
                            <Grid item lg={7} md={5}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    autoComplete="password"
                                    onChange={(e) =>
                                        fieldChangeHandler(
                                            "password",
                                            e.target.value
                                        )
                                    }
                                    value={inputValue.password}
                                    error={inputValue.err_list.password.show}
                                    helperText={
                                        inputValue.err_list.password.text
                                    }
                                    style={{
                                        background: "rgba(216, 216, 216, .3)",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Box textAlign="center">
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    mr: 5,
                                    backgroundColor: "rgb(33, 150, 243)",
                                    color: "white",
                                }}
                            >
                                Submit
                            </Button>
                            <Typography
                                style={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                }}
                                onClick={() => navigate("/forget")}
                            >
                                Forget your Password?
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
};

export default Login;
