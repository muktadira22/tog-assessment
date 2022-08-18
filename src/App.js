import React from "react";
import "./custom.scss";
import MasterFeeType from "./pages/MasterFeeType";
import FormMasterFeeType from "./pages/FormMasterFeeType";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path={"/"} component={MasterFeeType} exact />
      <Route path={"/add"} component={FormMasterFeeType} exact />
      <Route
        path={"/:id/:type(detail|edit)"}
        component={FormMasterFeeType}
        exact
      />
    </Switch>
  );
}

export default App;
