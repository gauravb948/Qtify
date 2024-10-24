import React from "react";

import { ReactComponent as RightArrow } from "../../assets/right-navigation.svg";

const RightNavigation = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ cursor: "pointer" }}>
      <RightArrow width="24" height="24" />
    </div>
  );
});
export default RightNavigation;
