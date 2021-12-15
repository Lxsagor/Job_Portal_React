import { Button, List, ListItem } from "@material-ui/core";
import { ImportContacts } from "@material-ui/icons";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStyles } from "./style";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Navbar = () => {
    const classes = useStyles();
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/api/v1/logout", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
                authorization: localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.status === "done") {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    toast.success("Successfully Logout");
                    navigate("/login");
                } else {
                    toast.error("Something wrong");
                }

                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    var AuthButton = "";
    let user = localStorage.getItem("user");

    if (!localStorage.getItem("token")) {
        AuthButton = (
            <List style={{ display: "flex" }}>
                <ListItem disablePadding>
                    <Button
                        variant="text"
                        color="primary"
                        onClick={() => navigate("/login")}
                        style={{
                            textTransform: "capitalize",
                            color: "rgb(33, 150, 243)",
                        }}
                    >
                        Log in
                    </Button>
                </ListItem>
                <ListItem disablePadding>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/reg")}
                        style={{
                            backgroundColor: "rgb(33, 150, 243)",
                            color: "white",
                        }}
                    >
                        SignUp
                    </Button>
                </ListItem>
            </List>
        );
    } else {
        AuthButton = (
            <List style={{ display: "flex" }}>
                <ListItem disablePadding>
                    <ListItemText primary={user} />
                </ListItem>
                <ListItem disablePadding>
                    <Button
                        variant="contained"
                        type="submit"
                        style={{
                            backgroundColor: "rgb(33, 150, 243)",
                            color: "white",
                        }}
                    >
                        Logout
                    </Button>
                </ListItem>
            </List>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <List className={classes.list}>
                <ListItem>
                    <ListItemText primary="Resume" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Cover Letter" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Resume Writing" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Blog" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="FAQ" />
                </ListItem>
                {AuthButton}
            </List>
        </form>
    );
};

export default Navbar;
