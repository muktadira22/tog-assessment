import React from "react";
import "./custom.scss";
import MasterFeeType from "./pages/MasterFeeType";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path={"/"} component={MasterFeeType} />
      <Route path={"/create"} component={MasterFeeType} exact />
    </Switch>
  );
}

export default App;
