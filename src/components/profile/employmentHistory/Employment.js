import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Employment = () => {
    const [value, setValue] = React.useState(new Date());
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
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            label="Starting Date"
                                            value={value}
                                            minDate={new Date("1900-01-01")}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField {...params} />
                                            )}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            label="Ending Date"
                                            value={value}
                                            minDate={new Date("1900-01-01")}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField {...params} />
                                            )}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Employment;
