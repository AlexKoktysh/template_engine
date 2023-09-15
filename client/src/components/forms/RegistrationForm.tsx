import { FC } from "react";
import { Box, Typography, FormControl } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { InputComponent } from "../common/InputComponent";
import { ButtonComponent } from "../common/ButtonComponent";

type Inputs = {
    password: string;
    email: string;
    onSubmit: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RegistrationForm: FC = () => {
    const { control, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <Box>
            <Typography variant="h1">RegistrationForm</Typography>
            <FormControl>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <InputComponent
                            label="Enter your email"
                            onChange={onChange}
                            value={value}
                            name="email"
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <InputComponent
                            label="Enter your password"
                            onChange={onChange}
                            value={value}
                            name="password"
                        />
                    )}
                />
                <ButtonComponent
                    name="Registration"
                    styles={{
                        color: "#FFF",
                        background: "#7246b8",
                        borderRadius: 20,
                    }}
                />
            </FormControl>
        </Box>
    );
};
