import { makeStyles } from "@mui/styles";
import Reg from "../../asset/images/reg.svg";
import Verify from "../../asset/images/verify.svg";
import Login from "../../asset/images/LoginImg.svg";

export const useStyles = makeStyles(() => ({
    signup: {
        color: "rgb(33, 150, 243)",
        fontSize: "46px",
        lineHeight: "48px",
        fontWeight: "700",
    },
    RegBackground: {
        backgroundImage: `url(${Reg})`,
        backgroundSize: "contain",
        backgroundPosition: "bottom left",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        "@media (max-width: 1199px)": {
            backgroundImage: "none",
        },
    },
    VerifyBackground: {
        backgroundImage: `url(${Verify})`,
        backgroundSize: "contain",
        backgroundPosition: " bottom left",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        "@media (max-width: 1199px)": {
            backgroundImage: "none",
        },
    },
    Loginbackground: {
        backgroundImage: `url(${Login})`,
        backgroundSize: "100%",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
    },
    inputStyle: {
        width: "3rem",
        height: "3rem",
        margin: "0 1rem",
        fontSize: "2rem",
        borderRadius: "10px 5px",
        border: "1px solid black",
        backgroundColor: "rgb(33, 150, 243)",

        color: "white",
    },
    verifyRoot: {
        height: "100%",
    },
}));
