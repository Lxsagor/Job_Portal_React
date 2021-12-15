import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../Redux/Action/AuthAction";
import { useStyles } from "../login/style";

const ChangePassword = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { forgetUserData, errorData } = useSelector((state) => state.auth);
    const [inputValue, setInputValue] = useState({
        email: forgetUserData.email,
        password: "",
        err_list: {
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
            changePassword(newRecord, () => {
                navigate("/login");
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
                                variant={"h6"}
                                style={{
                                    color: "rgb(33, 150, 243)",
                                    marginBottom: "20px",
                                    marginRight: "30px",
                                }}
                            >
                                Type Your Password
                            </Typography>
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
                        <Grid item align="center" style={{ marginTop: "15px" }}>
                            <Button
                                type="submit"
                                variant="contained"
                                style={{
                                    backgroundColor: "rgb(33, 150, 243)",
                                    color: "white",
                                }}
                            >
                                Verify
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
};

export default ChangePassword;
