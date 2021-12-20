import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import MailImage from "../../asset/images/imageMail.png";
import { resend, verify } from "../../Redux/Action/AuthAction";
import { useStyles } from "./style";

const RegVerification = () => {
    const dispatch = useDispatch();

    const classes = useStyles();
    const { registerData } = useSelector((state) => state.auth);

    const [OTP, setOTP] = useState("");
    function handleChange(OTP) {
        setOTP(OTP);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecord = {
            email: registerData.email,
            verification_code: OTP,
        };

        dispatch(
            verify(newRecord, () => {
                console.log(newRecord);
            })
        );
    };
    const handleCode = () => {
        const newRecord = {
            email: registerData.email,
        };

        dispatch(
            resend(newRecord, () => {
                // navigate("/verify");
                console.log(newRecord);
            })
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box my={3} style={{ background: "transparent" }}>
                <Grid Container justifyContent="center">
                    <Grid item>
                        <Grid item>
                            <Typography
                                variant="h4"
                                align="center"
                                style={{ color: "rgb(33, 150, 243)" }}
                            >
                                Enter 6 digit verification code we sent you in
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography
                                variant="h6"
                                align="center"
                                style={{
                                    fontStyle: "bold",
                                    color: "rgb(33, 150, 243)",
                                }}
                            >
                                {registerData.email}
                            </Typography>
                        </Grid>

                        <Grid
                            item
                            align="center"
                            style={{
                                marginTop: "15px",
                            }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    height: 233,
                                    width: 350,
                                    maxHeight: { xs: 233, md: 167 },
                                    maxWidth: { xs: 350, md: 250 },
                                }}
                                alt="OTP"
                                src={MailImage}
                            />
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

                                <Grid
                                    item
                                    align="center"
                                    style={{ marginTop: "15px" }}
                                >
                                    <Typography
                                        onClick={handleCode}
                                        style={{
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                            fontSize: "30px",
                                        }}
                                    >
                                        Resend Code
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    align="center"
                                    style={{ marginTop: "15px" }}
                                >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        style={{
                                            backgroundColor:
                                                "rgb(33, 150, 243)",
                                            color: "white",
                                        }}
                                    >
                                        Verify
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
};

export default RegVerification;
