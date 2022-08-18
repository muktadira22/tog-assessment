import React from "react";
import Lazyload from "components/Lazyload";

const AdvanceSearchCardLazy = React.lazy(() =>
  import(/* webpackChunkName: "AdvanceSearchCard-component" */ "./AdvanceSearchCard")
);

const AdvanceSearchCard = (props) => {
  return <Lazyload component={AdvanceSearchCardLazy} animationLoading {...props} />;
};

export default AdvanceSearchCard;
