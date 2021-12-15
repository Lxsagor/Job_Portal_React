import { MenuItem } from "@material-ui/core";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../../Redux/Action/AuthAction";
import { useStyles } from "./style";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { errorData } = useSelector((state) => state.auth);
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        skill_category_id: "",
        err_list: {
            name: { text: "", show: false },
            email: { text: "", show: false },
            password: { text: "", show: false },
            phone: { text: "", show: false },
        },
    });

    // const [activeStep, setActiveStep] = useState(0);

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
            register(newRecord, () => {
                // navigate("/verify");
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

    const classes = useStyles();

    return (
        <form onSubmit={handleSubmit}>
            <Box style={{ background: "transparent" }}>
                <Grid container justifyContent="center">
                    <Grid item lg={6}>
                        <Grid item>
                            <Typography
                                variant={"h4"}
                                textAlign="center"
                                className={classes.signup}
                            >
                                Sign up
                            </Typography>
                        </Grid>
                        <Box>
                            <Box py={2}>
                                <Grid
                                    container
                                    justifyContent="center"
                                    spacing={2}
                                >
                                    <Grid item lg={4} sm={6} xs={12}>
                                        <TextField
                                            autoComplete="Name"
                                            required
                                            fullWidth
                                            label="Name"
                                            autoFocus
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            value={inputValue.name}
                                            error={
                                                inputValue.err_list.name.show
                                            }
                                            helperText={
                                                inputValue.err_list.name.text
                                            }
                                        />
                                    </Grid>
                                    <Grid item lg={4} sm={6} xs={12}>
                                        <TextField
                                            style={{ width: "100%" }}
                                            variant="outlined"
                                            value={inputValue.gender}
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "gender",
                                                    e.target.value
                                                )
                                            }
                                            select
                                            label="Gender"
                                        >
                                            <MenuItem key={1} value="male">
                                                Male
                                            </MenuItem>
                                            <MenuItem key={2} value="female">
                                                Female
                                            </MenuItem>
                                            <MenuItem key={3} value="other">
                                                Other
                                            </MenuItem>
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box py={2}>
                                <Grid
                                    container
                                    justifyContent="center"
                                    spacing={2}
                                >
                                    <Grid item lg={4} sm={6} xs={12}>
                                        <TextField
                                            autoComplete="phone"
                                            required
                                            fullWidth
                                            label="Phone"
                                            autoFocus
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "phone",
                                                    e.target.value
                                                )
                                            }
                                            value={inputValue.phone}
                                            error={
                                                inputValue.err_list.phone.show
                                            }
                                            helperText={
                                                inputValue.err_list.phone.text
                                            }
                                        />
                                    </Grid>
                                    <Grid item lg={4} sm={6} xs={12}>
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
                                            error={
                                                inputValue.err_list.email.show
                                            }
                                            helperText={
                                                inputValue.err_list.email.text
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box py={2}>
                                <Grid
                                    container
                                    justifyContent="center"
                                    spacing={2}
                                >
                                    <Grid item lg={4} sm={6} xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Password"
                                            type="password"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            value={inputValue.password}
                                            error={
                                                inputValue.err_list.password
                                                    .show
                                            }
                                            helperText={
                                                inputValue.err_list.password
                                                    .text
                                            }
                                        />
                                    </Grid>
                                    <Grid item lg={4} sm={6} xs={12}>
                                        <TextField
                                            style={{ width: "100%" }}
                                            variant="outlined"
                                            value={inputValue.skill_category_id}
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "skill_category_id",
                                                    e.target.value
                                                )
                                            }
                                            select
                                            label="Skill"
                                        >
                                            <MenuItem key={1} value="designer">
                                                Designer
                                            </MenuItem>
                                            <MenuItem key={2} value="developer">
                                                Developer
                                            </MenuItem>
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box textAlign="center">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>

                                <Grid container justifyContent="center">
                                    <Grid item>
                                        <Button
                                            variant="text"
                                            color="primary"
                                            onClick={() => navigate("/login")}
                                            style={{
                                                textTransform: "initial",
                                            }}
                                        >
                                            Already have an account? Sign in
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
};
export default SignUp;
