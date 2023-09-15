import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./constants";

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Routes></Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};
