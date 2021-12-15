import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    toolbar: {
        minHeight: "85px !important",
        boxShadow: "none",
    },
    // signup: {
    //     "&:hover": {
    //         color: "white",
    //     },
    // },
    list: {
        display: "flex",

        justifyContent: "flex-end",
        "& .MuiListItem-root": {
            width: "initial",
        },
        "@media (max-width: 1199px)": {
            flexDirection: "column",
        },
    },
}));
