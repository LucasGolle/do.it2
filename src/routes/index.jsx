import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AnimatePresence } from "framer-motion";
import  {Signup}  from "../components/Signup/index";
import { Login } from "../pages/Login"

function Routes(){

    return(
        <AnimatePresence>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/signup">
                <Signup/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
        </Switch>
        </AnimatePresence>
    )
}

export default Routes;