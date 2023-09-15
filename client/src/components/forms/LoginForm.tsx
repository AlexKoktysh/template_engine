import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string;
    password: string;
};

export const LoginForm: FC = () => {
    return (
        <Box>
            <Typography variant="h1">LoginForm</Typography>
        </Box>
    );
};
