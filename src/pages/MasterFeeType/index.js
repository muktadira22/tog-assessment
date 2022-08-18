import React from "react";
import Lazyload from "components/Lazyload";

const MasterFeeTypeLazy = React.lazy(() =>
  import(/* webpackChunkName: "master-fee-type-page" */ "./MasterFeeType")
);

const MasterFeeType = (props) => {
  return <Lazyload component={MasterFeeTypeLazy} animationLoading {...props} />;
};

export default MasterFeeType;
