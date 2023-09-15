import { TextField, styled } from "@mui/material";
import { Ref, forwardRef, useState } from "react";
import { PasswordIcon } from "./PasswordIcon";

interface IProps {
    label: string;
    onChange: (val: any) => void;
    value: any;
    name: string;
}

const CssTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        height: "48px",
        padding: "14px 0px",
        backgroundColor: "white",
        borderRadius: "8px",
        margin: "10px 0",
    },
});

export const InputComponent = forwardRef<Ref<any>, IProps>((props, ref) => {
    const { label, onChange, value, name } = props;
    const [showPassword, setShowPassword] = useState(false);
    return (
        <CssTextField
            sx={{ width: "100%" }}
            placeholder={label}
            size="small"
            name={name}
            onChange={onChange}
            value={value}
            type={!showPassword ? "text" : "password"}
            autoComplete="on"
            InputProps={{
                ...props,
                endAdornment: label === "Enter your password" && (
                    <PasswordIcon
                        isShow={showPassword}
                        changeIsShow={setShowPassword}
                    />
                ),
            }}
        />
    );
});
