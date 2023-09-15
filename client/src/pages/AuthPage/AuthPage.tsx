import { FC } from "react";
import { Box } from "@mui/material";
import { LoginForm } from "../../components/forms/LoginForm";
import { RegistrationForm } from "../../components/forms/RegistrationForm";

interface IProps {
    type: "sign-in" | "sign-up";
}

export const AuthPage: FC<IProps> = ({ type }) => {
    return (
        <Box sx={{ height: "100vh" }}>
            {type === "sign-in" ? <LoginForm /> : <RegistrationForm />}
        </Box>
    );
};
