import { styleMapper } from "../../utill/style-mapper";

const NavbarItem = (props) => {
  return (
    <div className={styleMapper("navbar__item", props.styles)}>
      {props.children}
    </div>
  );
};

export default NavbarItem;
