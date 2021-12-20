import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
    Container,
    Grid, TextareaAutosize,
    TextField,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Employment = () => {
    const [value, setValue] = React.useState(null);

    return (
        <>
            <Container maxWidth="md">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mt: 3,
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Empolyment History
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    autoComplete="company name"
                                    required
                                    fullWidth
                                    label="Company Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} md={6} spacing={2}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Designation"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        label="Start Date"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        label="End Date"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item lg={12}>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    placeholder="Description"
                                    style={{
                                        width: "100%",
                                        height: 100,
                                        cursor: "auto",
                                        textAlign: "left",
                                        padding: "10px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Employment;
