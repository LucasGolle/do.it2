import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AnimatePresence } from "framer-motion";
import { Signup } from "../components/Button/Signup";

function Routes(){

    return(
        <AnimatePresence>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/signup">
                <Signup></Signup>
            </Route>
        </Switch>
        </AnimatePresence>
    )
}

export default Routes;