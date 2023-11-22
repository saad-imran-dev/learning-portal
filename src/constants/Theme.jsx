import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FD841F'
        },
        red: {
            main: '#ff0000'
        },
        grey: {
            main: '#dddddd'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '25px',
                },
            },
        },
    },

})