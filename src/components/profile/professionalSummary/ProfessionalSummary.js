import { Box, Container, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fieldChangeHandler } from "../../../Redux/Action/AuthAction";

const ProfessionalSummary = () => {
    const dispatch = useDispatch();
    const { profileForm } = useSelector((state) => state.auth);
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
                        style={{
                            width: 400,
                            height: 300,
                            cursor: "auto",
                            padding: "10px",
                        }}
                        placeholder="Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills."
                        value={profileForm.summary_yourself}
                        onChange={(e) =>
                            dispatch(
                                fieldChangeHandler(
                                    "summary_yourself",
                                    e.target.value
                                )
                            )
                        }
                    />
                </Box>
            </Container>
        </>
    );
};

export default ProfessionalSummary;
