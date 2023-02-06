import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import PageLogin from "../pages/pagelogin";
import PageRegister from "../pages/pageregister";
import PageProfile from "../pages/profile";
import Profile from "../pages/profile";


function Routes() {
    const [authenticated, setAuthenticated]= useState(false);
    
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("Kontakt@token"));
    
        if (token){
          return setAuthenticated(true);
        }
      }, [authenticated]);

    return(
        <Switch>
            <Route exact path="/">
                <PageLogin authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
            <Route exact path="/register">
                <PageRegister/>
            </Route>
            <Route exact path="/dashboard">
                <Dashboard authenticated={authenticated}/>
            </Route>
            <Route exact path="/profile">
                <PageProfile authenticated={authenticated}/>
            </Route>
        </Switch>
    )
}

export default Routes;