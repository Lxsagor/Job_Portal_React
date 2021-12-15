import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useStyles } from "../login/style";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { confirmForgetPass } from "../../Redux/Action/AuthAction";
import { useNavigate } from "react-router-dom";

const ConfirmForgetPass = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { forgetUserData } = useSelector((state) => state.auth);
    const [OTP, setOTP] = useState("");
    function handleChange(OTP) {
        setOTP(OTP);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecord = {
            email: forgetUserData.email,
            verification_code: OTP,
        };
        console.log(newRecord);

        dispatch(
            confirmForgetPass(newRecord, () => {
                navigate("/changePassword");
                console.log(newRecord);
            })
        );
    };

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
                                    textDecoration: "underline",
                                }}
                            >
                                6 digit OTP send in-
                                {forgetUserData.email}
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid item style={{ marginTop: "15px" }}>
                                <OtpInput
                                    onChange={handleChange}
                                    value={OTP}
                                    inputStyle={classes.inputStyle}
                                    numInputs={6}
                                    separator={<span></span>}
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

export default ConfirmForgetPass;
