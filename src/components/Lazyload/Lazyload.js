import React, { Suspense } from "react";
import PropTypes from "prop-types";

const Lazyload = ({
  component: Component,
  animationLoading,
  loaderCustom: LoaderCustom,
  ...rest
}) => {
  const loadingDefault = animationLoading ? (
    <p>Loading...</p>
  ) : (
    <p>Loading...</p>
  );

  return (
    <Suspense fallback={LoaderCustom ? <LoaderCustom /> : loadingDefault}>
      <Component {...rest} />
    </Suspense>
  );
};

Lazyload.propTypes = {
  component: PropTypes.any,
  animationLoading: PropTypes.bool,
  loaderCustom: PropTypes.any
};

export default Lazyload;
