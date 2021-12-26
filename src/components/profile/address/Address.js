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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fieldChangeHandler } from "../../../Redux/Action/AuthAction";

const Address = () => {
    const dispatch = useDispatch();
    const { profileForm } = useSelector((state) => state.auth);
    const [addressForm, setAddressForm] = useState([]);

    useEffect(() => {
        if (profileForm && profileForm.address) {
            setAddressForm(profileForm.address);
        }
    }, [profileForm]);

    const addressFieldChanger = (index, field, value) => {
        let newData = [...addressForm];

        newData[index][field] = value;
        setAddressForm((prevState) => newData);
        dispatch(fieldChangeHandler("address", newData));
    };

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
                    <Typography
                        component="h1"
                        variant="h5"
                        style={{ textDecoration: "underline" }}
                    >
                        Address
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Typography variant="h6" style={{ my: "3" }}>
                            Present Address
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="District"
                                    fullWidth
                                    label="District"
                                    autoFocus
                                    value={
                                        addressForm &&
                                        addressForm[0] &&
                                        addressForm[0].present_district
                                    }
                                    onChange={(e) =>
                                        addressFieldChanger(
                                            0,
                                            "present_district",
                                            e.target.value
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Thana"
                                    value={
                                        addressForm &&
                                        addressForm[0] &&
                                        addressForm[0].present_thana
                                    }
                                    onChange={(e) =>
                                        addressFieldChanger(
                                            0,
                                            "present_thana",
                                            e.target.value
                                        )
                                    }
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Post office"
                                    autoFocus
                                    value={
                                        addressForm &&
                                        addressForm[0] &&
                                        addressForm[0].present_p_o
                                    }
                                    onChange={(e) =>
                                        addressFieldChanger(
                                            0,
                                            "present_p_o",
                                            e.target.value
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="House/Village/Road"
                                    value={
                                        addressForm &&
                                        addressForm[0] &&
                                        addressForm[0].present_house_road_vill
                                    }
                                    onChange={(e) =>
                                        addressFieldChanger(
                                            0,
                                            "present_house_road_vill",
                                            e.target.value
                                        )
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Typography variant="h6" style={{ my: "3" }}>
                            Permanent Address
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="District"
                                    fullWidth
                                    label="District"
                                    autoFocus
                                    value={
                                        addressForm &&
                                        addressForm[1] &&
                                        addressForm[1].permanent_district
                                    }
                                    onChange={(e) =>
                                        addressFieldChanger(
                                            1,
                                            "permanent_district",
                                            e.target.value
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Thana"
                                    value={
                                        addressForm &&
                                        addressForm[1] &&
                                        addressForm[1].permanent_thana
                                    }
                                    onChange={(e) =>
                                        addressFieldChanger(
                                            1,
                                            "permanent_thana",
                                            e.target.value
                                        )
                                    }
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Post office"
                                    autoFocus
                                    value={
                                        addressForm &&
                                        addressForm[1] &&
                                        addressForm[1].permanent_p_o
                                    }
                                    onChange={(e) =>
                                        addressFieldChanger(
                                            1,
                                            "permanent_p_o",
                                            e.target.value
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="House/Village/Road"
                                    value={
                                        addressForm &&
                                        addressForm[1] &&
                                        addressForm[1].permanent_house_road_vill
                                    }
                                    onChange={(e) =>
                                        addressFieldChanger(
                                            1,
                                            "permanent_house_road_vill",
                                            e.target.value
                                        )
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Address;
