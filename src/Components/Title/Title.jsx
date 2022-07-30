import React, { memo } from "react";
import classes from "./Title.module.scss";

function Title() {
  return <h1 className={classes.title}>Todo</h1>;
}

export default memo(Title);
