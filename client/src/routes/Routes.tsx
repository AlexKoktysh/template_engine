import { ReactElement } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { AuthPage, HomePage } from "../pages";
import { paths } from "./paths";

export const Routes = (): ReactElement => {
    return (
        <Switch>
            <Route path={paths.HOME} element={<HomePage />} />
            <Route path={paths.LOGIN} element={<AuthPage type="sign-in" />} />
            <Route
                path={paths.REGISTRATION}
                element={<AuthPage type="sign-up" />}
            />
            <Route path={paths.DEFAULT} element={<HomePage />} />
        </Switch>
    );
};
