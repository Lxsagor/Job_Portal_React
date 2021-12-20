import { Box, Container, Typography } from "@mui/material";
import React from "react";

const WebnSocialLinks = () => {
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
                </Box>
            </Container>
        </>
    );
};

export default WebnSocialLinks;
