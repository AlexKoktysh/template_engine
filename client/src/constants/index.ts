import { PaletteColorOptions, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
    interface CustomPalette {
        apple: PaletteColorOptions;
    }
    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
    interface TypographyVariants {}
    interface TypographyVariantsOptions {}
}
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        apple: true;
    }
}
declare module "@mui/material" {
    interface TextFieldPropsColorOverrides {
        apple: true;
    }
}
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        header: true;
    }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
    augmentColor({ color: { main: mainColor } });

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 900,
            md: 1200,
            lg: 1440,
            xl: 1920,
        },
    },
    palette: {
        apple: createColor("#06BB64"),
    },
    typography: {},
});
theme.typography.h1 = {
    fontSize: "2rem",
    fontWeight: "900",
    "@media (max-width: 900px)": {
        fontSize: "2.5rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "3.5rem",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "4.5rem",
    },
};
