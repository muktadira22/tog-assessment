import React from "react";
import Lazyload from "components/Lazyload";

const LayoutLazy = React.lazy(() =>
  import(/* webpackChunkName: "layout-component" */ "./Layout")
);

const Layout = (props) => {
  return <Lazyload component={LayoutLazy} animationLoading {...props} />;
};

export default Layout;
