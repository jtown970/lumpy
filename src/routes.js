import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Shop from "./components/Shop"
// import project2 from "./components/ProjectTwo"
import { useStore } from "react-redux"

const Routes = () => {
  return ( 
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <ProtectedRoute path='/store' component={Shop} />
      {/* <Route path='/project/2' component={project2} /> */}
    </Switch>
  )
}

const ProtectedRoute = (props) => {
  const {
    user: { user },
  } = useStore().getState()

  if (user.email === "") {
    return <Redirect to='/' />
  } else {
    return <Route {...props} />
  }
}

export default Routes