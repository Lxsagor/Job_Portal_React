import { Grid } from "@material-ui/core";
import { Step, StepLabel, Stepper } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import RegForm from "../../components/signup/RegForm";
import RegVerification from "../../components/signup/RegVerification";
import { useStyles } from "../../components/signup/style";
import Login from "../login/index";

const Registration = () => {
    const classes = useStyles();
    const { activeStep } = useSelector((state) => state.auth);

    const [steps] = useState([
        "Registration",
        "Verify Your Account",
        "Registration Success",
    ]);

    const [className, setClassName] = useState(classes.RegBackground);

    React.useEffect(() => {
        if (activeStep === 0) {
            setClassName(classes.RegBackground);
        } else if (activeStep === 1) {
            setClassName(classes.VerifyBackground);
        }
    }, [activeStep]);

    return (
        <Box my={3} className={className}>
            <Grid container justifyContent="center">
                <Grid item lg={5} md={6} sm={7}>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
            </Grid>
            {activeStep === 0 && <RegForm />}
            {activeStep === 1 && <RegVerification />}
            {/* {activeStep === 2 && <Login />} */}
        </Box>
    );
};
export default Registration;
