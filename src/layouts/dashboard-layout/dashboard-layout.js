import classes from "./dashboard-layout.module.css";

const DashboardLayout = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

const Main = (props) => {
  return <div className={classes.main}>{props.children}</div>;
};
DashboardLayout.Main = Main;

const Content = (props) => {
  return <div className={classes.content}>{props.children}</div>;
};
DashboardLayout.Content = Content;

export default DashboardLayout;
