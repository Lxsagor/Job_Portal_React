import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useStyles } from "../login/style";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { forget } from "../../Redux/Action/AuthAction";

const Forget = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { errorData } = useSelector((state) => state.auth);

    const [inputValue, setInputValue] = useState({
        email: "",
        err_list: {
            email: { text: "", show: false },
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
            forget(newRecord, () => {
                navigate("/confirmForgetPass");
                // console.log(newRecord);
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
            <Box className={classes.Loginbackground} spacing={5} sx={{ mt: 8 }}>
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
                                    marginBottom: "10px",
                                    marginRight: "30px",
                                }}
                            >
                                Type Your Email
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
                        <Box textAlign="center">
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    mt: 1,
                                    mb: 2,
                                    mr: 5,
                                    backgroundColor: "rgb(33, 150, 243)",
                                    color: "white",
                                }}
                            >
                                Send Code
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
};

export default Forget;
