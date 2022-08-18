import React from "react";
import Lazyload from "components/Lazyload";

const FormMasterFeeTypeLazy = React.lazy(() =>
  import(
    /* webpackChunkName: "form-master-fee-type-page" */ "./FormMasterFeeType"
  )
);

const MasterFeeType = (props) => {
  return (
    <Lazyload component={FormMasterFeeTypeLazy} animationLoading {...props} />
  );
};

export default MasterFeeType;
