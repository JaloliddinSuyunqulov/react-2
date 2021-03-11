import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
function App() {
  return (
      <div>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/profil-page' component={ProfilePage}/>
                  <Route component={NotFound}/>
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
