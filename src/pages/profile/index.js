import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import Education from "../../components/profile/education/Education";
import Employment from "../../components/profile/employmentHistory/Employment";
import PersonalInfo from "../../components/profile/personalDetails/PersonalInfo";

function Profile() {
    const steps = [
        "Personal Details",
        "Professional Summary",
        "Employment History",
        "Education",
        "Websites & Social Links",
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
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === 1 && <PersonalInfo />}
            {activeStep === 2 && <Employment />}
            {activeStep === 3 && <Education />}
            <Container maxWidth="sm">
                <Box
                    sx={{
                        alignItems: "center",
                        mt: 2,
                    }}
                >
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
                                disabled={activeStep === 12}
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
    );
}
export default Profile;
