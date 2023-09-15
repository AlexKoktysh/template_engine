import { FC, useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        location.pathname !== "/" && navigate("/");
    }, [location, navigate]);

    return <Box>HomePage</Box>;
};
