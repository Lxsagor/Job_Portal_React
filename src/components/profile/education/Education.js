import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Education = () => {
    return (
        <>
            <Container maxWidth="md">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography>Education</Typography>
                </Box>
            </Container>
        </>
    );
};

export default Education;
