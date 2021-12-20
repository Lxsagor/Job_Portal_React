import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
    Box,
    Container,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fieldChangeHandler } from "../../../Redux/Action/AuthAction";

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const { profileForm, errorData } = useSelector((state) => state.auth);

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
                                    required
                                    fullWidth
                                    label="First Name"
                                    autoFocus
                                    value={profileForm.first_name}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "first_name",
                                                e.target.value
                                            )
                                        )
                                    }
                                    error={errorData.first_name.show}
                                    helperText={errorData.first_name.text}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={profileForm.last_name}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "last_name",
                                                e.target.value
                                            )
                                        )
                                    }
                                    error={errorData.last_name.show}
                                    helperText={errorData.last_name.text}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="father's name"
                                    fullWidth
                                    label="Father's Name"
                                    autoFocus
                                    value={profileForm.fathers_name}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "fathers_name",
                                                e.target.value
                                            )
                                        )
                                    }
                                    error={errorData.fathers_name.show}
                                    helperText={errorData.fathers_name.text}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Mother's Name"
                                    autoComplete="family-name"
                                    value={profileForm.mothers_name}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "mothers_name",
                                                e.target.value
                                            )
                                        )
                                    }
                                    error={errorData.mothers_name.show}
                                    helperText={errorData.mothers_name.text}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        required
                                        label="Date Of Birth"
                                        value={profileForm.date_of_birth}
                                        onChange={(newValue) => {
                                            dispatch(
                                                fieldChangeHandler(
                                                    "date_of_birth",
                                                    newValue
                                                )
                                            );
                                        }}
                                        error={errorData.date_of_birth.show}
                                        helperText={
                                            errorData.date_of_birth.text
                                        }
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Religion"
                                    select
                                    variant="outlined"
                                    value={profileForm.religion}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "religion",
                                                e.target.value
                                            )
                                        )
                                    }
                                    error={errorData.religion.show}
                                    helperText={errorData.religion.text}
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
                                    <MenuItem key={4} value="buddhism">
                                        Buddhism
                                    </MenuItem>
                                    <MenuItem key={5} value="judaism">
                                        Judaism
                                    </MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    style={{ width: "100%" }}
                                    variant="outlined"
                                    value={profileForm.gender}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "gender",
                                                e.target.value
                                            )
                                        )
                                    }
                                    error={errorData.gender.show}
                                    helperText={errorData.gender.text}
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
                                    required
                                    fullWidth
                                    label="Marital Status"
                                    select
                                    variant="outlined"
                                    value={profileForm.marital_status}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "marital_status",
                                                e.target.value
                                            )
                                        )
                                    }
                                    error={errorData.marital_status.show}
                                    helperText={errorData.marital_status.text}
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
                                    value={profileForm.nationality}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "nationality",
                                                e.target.value
                                            )
                                        )
                                    }
                                    error={errorData.nationality.show}
                                    helperText={errorData.nationality.text}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="NID"
                                    value={profileForm.nid}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "nid",
                                                e.target.value
                                            )
                                        )
                                    }
                                    error={errorData.nid.show}
                                    helperText={errorData.nid.text}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Passport No."
                                    value={profileForm.passport_no}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "passport_no",
                                                e.target.value
                                            )
                                        )
                                    }
                                    error={errorData.passport_no.show}
                                    helperText={errorData.passport_no.text}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Blood Group"
                                    value={profileForm.blood_group}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "blood_group",
                                                e.target.value
                                            )
                                        )
                                    }
                                    error={errorData.blood_group.show}
                                    helperText={errorData.blood_group.text}
                                />
                            </Grid>
                            <Grid item>{/* photo */}</Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default PersonalInfo;
