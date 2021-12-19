import Login  from "../Components/LandingPageComponents/Login/Login";
import AdminPanel from './AdminPanel/AdminPanel'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  const Routers =()=>{
      return(
          <Router>
          <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          </Switch>
          <Switch>
          <Route  path="/adminpanel">
            <AdminPanel />
          </Route>
        </Switch>
          </Router>
      )
  }
  export default Routers
