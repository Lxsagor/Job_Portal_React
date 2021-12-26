import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Address from "../../components/profile/address/Address";
import Education from "../../components/profile/education/Education";
import Employment from "../../components/profile/employmentHistory/Employment";
import PersonalInfo from "../../components/profile/personalDetails/PersonalInfo";
import ProfessionalSummary from "../../components/profile/professionalSummary/ProfessionalSummary";
import Contact from "../../components/profile/WebSitenSocialLinks/WebnSocialLinks";
import { updateProfileInfo } from "../../Redux/Action/AuthAction";
import { SET_ACTIVE_STEP } from "../../Redux/Action/type";

function Profile() {
    const steps = [
        "Personal Details",
        "Address",
        "Professional Summary",
        "Websites & Social Links",
        "Education",

        "Employment History",
        "Skill",
        "Courses",
        "Extra-curricular Activities",
        "Internships",
        "Hobbies",
        "Languages",
        "References",
        "Custom Section",
    ];
    const theme = useTheme();
    const dispatch = useDispatch();
    const { activeStep, profileForm } = useSelector((state) => state.auth);
    // const [activeStep, setActiveStep] = React.useState(0);
    // console.log(profileForm);

    const handleNext = () => {
        // if (activeStep === 0) {

        // dispatch(
        // updateProfileInfo(profileForm, () => {
        dispatch({
            type: SET_ACTIVE_STEP,
            payload: activeStep + 1,
        });
        // })
        // );

        // if (activeStep === 1) {
        //     dispatch(
        //         updateProfileInfo(profileForm, () => {
        //             dispatch({
        //                 type: SET_ACTIVE_STEP,
        //                 payload: activeStep + 1,
        //             });
        //         })
        //     );
        // }
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        dispatch({
            type: SET_ACTIVE_STEP,
            payload: activeStep - 1,
        });
        // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    px: 3,
                }}
            >
                <Box mt={4}>
                    <Stepper
                        nonLinear
                        activeStep={activeStep}
                        // alternativeLabel
                        orientation="vertical"
                    >
                        {steps.map((label) => (
                            <Step key={label}>
                                {/* <StepButton
                                    color="inherit"
                                    onClick={handleStep(index)}
                                >
                                    {label}
                                </StepButton> */}
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                <Container maxWidth="sm">
                    <Box
                        sx={{
                            alignItems: "center",
                            mt: 2,
                        }}
                    >
                        {activeStep === 4 && <PersonalInfo />}
                        {activeStep === 1 && <Address />}
                        {activeStep === 2 && <ProfessionalSummary />}
                        {activeStep === 3 && <Contact />}
                        {activeStep === 0 && <Education />}
                        {activeStep === 5 && <Employment />}
                        <MobileStepper
                            variant="progress"
                            steps={13}
                            position="static"
                            activeStep={activeStep}
                            sx={{ maxWidth: 600, flexGrow: 1 }}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === 13}
                                >
                                    Next
                                    {theme.direction === "rtl" ? (
                                        <KeyboardArrowLeftIcon />
                                    ) : (
                                        <KeyboardArrowRightIcon />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button
                                    size="small"
                                    onClick={handleBack}
                                    disabled={activeStep === 0}
                                >
                                    {theme.direction === "rtl" ? (
                                        <KeyboardArrowRightIcon />
                                    ) : (
                                        <KeyboardArrowLeftIcon />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default Profile;
