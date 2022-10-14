import { Switch ,Route , Redirect } from "react-router"
import Registration from "./Registration";
import App from "../App";

const Routes = () => {

    const user = true
    return (
        <>
           {
               user ? (
                   <>
                        <Switch >
                            <Route path="/" exact component={App} />
                            <Redirect to="/" />
                        </Switch>
                   </>
               ) : (
                   <Switch>
                       <Route path="/registration" component={Registration} />
                       <Redirect to="/registration" />
                   </Switch>
               )
           }
        </>
    )
}

export default Routes