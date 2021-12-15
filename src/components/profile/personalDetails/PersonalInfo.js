import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
    Box,
    Container,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import "date-fns";
import React from "react";
import { useStyles } from "./style";

const PersonalInfo = () => {
    const classes = useStyles();
    // const [value, setValue] = React.useState(new Date());

    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Personal Details
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="father's name"
                                    fullWidth
                                    label="Father's Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Mother's Name"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                        // label="Date Of Birth"
                                        // // value={value}
                                        // minDate={new Date("1900-01-01")}
                                        // onChange={(newValue) => {
                                        //     setValue(newValue);
                                        // }}
                                        // renderInput={(params) => (
                                        //     <TextField {...params} />
                                        // )}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Religion"
                                    select
                                    variant="outlined"
                                >
                                    <MenuItem key={1} value="islam">
                                        Islam
                                    </MenuItem>
                                    <MenuItem key={2} value="hinduism">
                                        Hinduism
                                    </MenuItem>
                                    <MenuItem key={3} value="christianity">
                                        Christianity
                                    </MenuItem>
                                    <MenuItem key={4} value="buddhism ">
                                        Buddhism
                                    </MenuItem>
                                    <MenuItem key={5} value="judaism  ">
                                        Judaism
                                    </MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    style={{ width: "100%" }}
                                    variant="outlined"
                                    // value={inputValue.gender}
                                    // onChange={(e) =>
                                    //     fieldChangeHandler(
                                    //         "gender",
                                    //         e.target.value
                                    //     )
                                    // }
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Marital Status"
                                    select
                                    variant="outlined"
                                >
                                    <MenuItem key={1} value="single">
                                        Single
                                    </MenuItem>
                                    <MenuItem key={2} value="married">
                                        Married
                                    </MenuItem>
                                    <MenuItem key={3} value="divorced">
                                        Divorced
                                    </MenuItem>
                                    <MenuItem key={4} value="separated ">
                                        Separated
                                    </MenuItem>
                                    <MenuItem key={5} value="widowed  ">
                                        Widowed
                                    </MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Nationality"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="NID" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Passport No." />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Blood Group" />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default PersonalInfo;
