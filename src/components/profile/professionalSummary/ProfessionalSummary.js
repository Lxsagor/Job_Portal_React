import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Box, Container, Typography } from "@mui/material";

const ProfessionalSummary = () => {
    return (
        <>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h5" sx={{ m: 3 }}>
                        Professional Summary
                    </Typography>
                    <TextareaAutosize
                        aria-label="minimum height"
                        style={{ width: 400, height: 100, cursor: "auto" }}
                        placeholder="Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills."
                    />
                </Box>
            </Container>
        </>
    );
};

export default ProfessionalSummary;
