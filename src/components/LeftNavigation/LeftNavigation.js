import React from "react";
import { ReactComponent as LeftArrow } from "../../assets/left-navigation.svg";

const LeftNavigation = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ cursor: "pointer" }}>
      <LeftArrow width="24" height="24" />
    </div>
  );
});
export default LeftNavigation;
