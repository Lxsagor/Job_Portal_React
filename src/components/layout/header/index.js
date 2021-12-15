import { Grid, Hidden, IconButton, SwipeableDrawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useStyles } from "./style";

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const drawerHandler = (state) => {
        setDrawerOpen(state);
    };

    return (
        <>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                style={{ backgroundColor: "#fff" }}
            >
                <Toolbar className={classes.toolbar}>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item lg={2} sm={3} xs={3}>
                            <Button
                                variant="text"
                                onClick={() => navigate("/")}
                                style={{
                                    textTransform: "capitalize",
                                    color: "black",
                                    fontSize: "20px",
                                }}
                            >
                                Job.IO
                            </Button>
                        </Grid>

                        <Grid item lg={9} sm={9} xs={9}>
                            <Box textAlign="right">
                                <Hidden lgUp>
                                    <IconButton
                                        onClick={() => drawerHandler(true)}
                                    >
                                        <Menu />
                                    </IconButton>
                                </Hidden>

                                <Hidden mdDown>
                                    <Navbar />
                                </Hidden>

                                <SwipeableDrawer
                                    anchor="right"
                                    open={drawerOpen}
                                    onClose={() => drawerHandler(false)}
                                    onOpen={() => drawerHandler(true)}
                                >
                                    <Navbar />
                                </SwipeableDrawer>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Header;
