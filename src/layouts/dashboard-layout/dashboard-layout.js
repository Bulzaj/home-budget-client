import classes from "./dashboard-layout.module.css";

const DashboardLayout = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

const Nav = (props) => {
  return <div className={classes.nav}>{props.children}</div>;
};
DashboardLayout.Nav = Nav;

const Side = (props) => {
  return <div className={classes.side}>{props.children}</div>;
};
DashboardLayout.Side = Side;

const Main = (props) => {
  return <div className={classes.main}>{props.children}</div>;
};
DashboardLayout.Main = Main;

const Content = (props) => {
  return <div className={classes.content}>{props.children}</div>;
};
DashboardLayout.Content = Content;

export default DashboardLayout;
