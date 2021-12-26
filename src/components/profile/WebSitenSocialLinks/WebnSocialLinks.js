import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fieldChangeHandler } from "../../../Redux/Action/AuthAction";

const WebnSocialLinks = () => {
    const dispatch = useDispatch();
    const { profileForm, updateerrorData } = useSelector((state) => state.auth);

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
                        Socail Link
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Github Link"
                                    autoFocus
                                    value={profileForm.github_link}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "github_link",
                                                e.target.value
                                            )
                                        )
                                    }
                                    // error={updateerrorData.github_link.show}
                                    // helperText={
                                    //     updateerrorData.github_link.text
                                    // }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Linkedin Link"
                                    autoFocus
                                    value={profileForm.linkedin_link}
                                    onChange={(e) =>
                                        dispatch(
                                            fieldChangeHandler(
                                                "linkedin_link",
                                                e.target.value
                                            )
                                        )
                                    }
                                    // error={updateerrorData.github_link.show}
                                    // helperText={
                                    //     updateerrorData.github_link.text
                                    // }
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default WebnSocialLinks;
