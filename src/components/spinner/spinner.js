import ScaleLoader from "react-spinners/ScaleLoader";
import classes from "./spinner.module.css";

const color = "hsl(190, 60%, 50%)";

const Spinner = (props) => {
  return (
    <div className={classes.spinnerWrapper}>
      <ScaleLoader loading={true} color={color} />
    </div>
  );
};

export default Spinner;
