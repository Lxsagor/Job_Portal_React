import { makeStyles } from "@mui/styles";
import Login from "../../asset/images/LoginImg.svg";

export const useStyles = makeStyles(() => ({
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
}));
