import React from "react";
import { createUseStyles } from "react-jss";

const styles = ({ parameters }) => ({
  container: {
    backgroundColor: parameters.sapUiGlobalBackgroundColor,
    fontFamily: parameters.sapUiFontFamily,
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: parameters.sapUiNegativeText,
    fontSize: parameters.sapUiFontHeader1Size
  }
});

const useStyles = createUseStyles(styles);

export const MyCustomElement = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <span className={classes.text}>My custom Text Element</span>
    </div>
  );
};