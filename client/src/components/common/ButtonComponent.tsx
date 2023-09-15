import * as React from "react";
import { LoadingButton } from "@mui/lab";
import { SxProps, Theme } from "@mui/material";

interface IProps {
    name: string;
    styles?: SxProps<Theme>;
    loading?: boolean;
    onSubmit?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ButtonComponent: React.FC<IProps> = ({
    name,
    onSubmit,
    loading,
    styles,
}) => {
    // const click = (e: any) => {
    //     onSubmit(e);
    // };

    return (
        <LoadingButton
            // onClick={click}
            sx={styles}
            variant="contained"
            disabled={loading}
            loading={loading}
        >
            {name}
        </LoadingButton>
    );
};
