import classes from "./side-bar.module.css";
import Button from "../button/button";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowDimmensions from "../../hooks/use-window-dimmensions";
import { useCollapseSidebar } from "../../hooks/use-collapse-sidebar";
import { FaRegWindowClose } from "react-icons/fa";

const BREAKPOINT = 830;

const SideBar = (props) => {
  const { width } = useWindowDimmensions();
  const { isVisible } = useCollapseSidebar();

  if (width > BREAKPOINT) {
    return <SideBarStatic>{props.children}</SideBarStatic>;
  }

  return (
    <SideBarCollapse visible={isVisible}>{props.children}</SideBarCollapse>
  );
};

const SideBarCollapse = (props) => {
  const { setNotVisible } = useCollapseSidebar();
  if (props.visible) {
    return (
      <div className={classes.sidebarCollapse}>
        <div className={classes.buttonWrapper}>
          <h1 className={classes.title}>Home Budget</h1>
          <Button
            icon={FaRegWindowClose}
            styles={["no-border", "font-size-lg"]}
            onClick={setNotVisible}
          />
        </div>
        <div className={classes.sidebarContent}>{props.children}</div>
      </div>
    );
  }

  return null;
};

const SideBarStatic = (props) => {
  return <div className={classes.sidebarStatic}>{props.children}</div>;
};

const ToggleButton = (props) => {
  const { width } = useWindowDimmensions();
  const { setVisible } = useCollapseSidebar();

  if (width > BREAKPOINT) {
    return null;
  }

  return (
    <Button
      styles={["no-border", "font-size-lg"]}
      icon={GiHamburgerMenu}
      onClick={setVisible}
    ></Button>
  );
};
SideBar.ToggleButton = ToggleButton;

const Item = (props) => {
  return (
    <div onClick={props.onClick} className={classes.item}>
      {props.children}
    </div>
  );
};
SideBar.Item = Item;

const Label = (props) => {
  return (
    <h3 className={classes.label}>
      <span>{props.children}</span>
    </h3>
  );
};
SideBar.Label = Label;

const Group = (props) => {
  return <div className={classes.group}>{props.children}</div>;
};
SideBar.Group = Group;

export default SideBar;
