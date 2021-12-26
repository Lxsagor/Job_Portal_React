import {
    Container,
    Grid,
    TextField,
    Typography,
    Button,
    Dialog,
    DialogContent,
} from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EducationDialog from "../EducationDialog";

function Education() {
    // const { profileForm } = useSelector((state) => state.auth);

    const [educations, setEducations] = useState([]);

    const addEducationHandler = () => {
        let existEducation = [...educations];
        existEducation.push({
            education_level: null,
            degree: null,
            group: null,
            institute: null,
            country: null,
            result: null,
            passing_year: null,
            duration: null,
            achievement: "",
        });

        setEducations(existEducation);
    };

    const [addEducationDialog, setAddEducationDialog] = useState(false);

    return (
        <>
            <Container component="main" maxWidth="sm">
                {/* {console.log(profileForm.education)} */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Education
                    </Typography>

                    <Box textAlign="right">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setAddEducationDialog(true)}
                        >
                            Add Education
                        </Button>
                    </Box>

                    <Dialog
                        maxWidth="sm"
                        fullWidth
                        open={addEducationDialog}
                        onClose={() => setAddEducationDialog(false)}
                    >
                        <DialogContent>
                            <EducationDialog />
                        </DialogContent>
                    </Dialog>

                    {/* <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Level of Education"
                                    select
                                    variant="outlined"
                                >
                                    <MenuItem key={1} value="psc">
                                        PSC/5 pass
                                    </MenuItem>
                                    <MenuItem key={2} value="jsc">
                                        JSC/8 pass
                                    </MenuItem>
                                    <MenuItem key={3} value="ssc">
                                        Secondary
                                    </MenuItem>
                                    <MenuItem key={4} value="hsc">
                                        Higher Secondry
                                    </MenuItem>
                                    <MenuItem key={5} value="diploma">
                                        Diploma
                                    </MenuItem>
                                    <MenuItem key={6} value="bsc">
                                        Bachelor/Honors
                                    </MenuItem>
                                    <MenuItem key={6} value="msc">
                                        Masters
                                    </MenuItem>
                                    <MenuItem key={6} value="doctoral">
                                        Doctoral
                                    </MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    style={{ width: "100%" }}
                                    variant="outlined"
                                    select
                                    required
                                    label="Exam/Degree Title"
                                >
                                    <MenuItem key={1} value="null">
                                        null
                                    </MenuItem>
                                    <MenuItem key={2} value="null">
                                        null
                                    </MenuItem>
                                    <MenuItem key={3} value="null">
                                        null
                                    </MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Group/Major/Concentration"
                                    select
                                    variant="outlined"
                                >
                                    <MenuItem key={1} value="null">
                                        null
                                    </MenuItem>
                                    <MenuItem key={2} value="null">
                                        null
                                    </MenuItem>
                                    <MenuItem key={3} value="null">
                                        null
                                    </MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    style={{ width: "100%" }}
                                    variant="outlined"
                                    select
                                    label="Board"
                                >
                                    <MenuItem key={1} value="null">
                                        null
                                    </MenuItem>
                                    <MenuItem key={2} value="null">
                                        null
                                    </MenuItem>
                                    <MenuItem key={3} value="null">
                                        null
                                    </MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Institute name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth label="Country" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Result"
                                    select
                                    variant="outlined"
                                >
                                    <MenuItem key={1} value="null">
                                        null
                                    </MenuItem>
                                    <MenuItem key={2} value="null">
                                        null
                                    </MenuItem>
                                    <MenuItem key={3} value="null">
                                        null
                                    </MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Passing Year"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Duration" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Achievement" />
                            </Grid>
                        </Grid>
                    </Box> */}
                </Box>
            </Container>
        </>
    );
}
export default Education;
