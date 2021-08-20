import FlexLayout from "../../layouts/flex-layout";
import { styleMapper } from "../../utill/style-mapper";
import NavbarItem from "./navbar-item";
import NavbarLink from "./navbar-link";

const Navbar = (props) => {
  return (
    <div className={styleMapper("navbar", props.styles)}>
      <nav className="navbar__nav">
        <FlexLayout styles={["space-between"]}>
          <NavbarItem>
            <NavbarLink to="">Home Budget</NavbarLink>
          </NavbarItem>
          <FlexLayout styles={["space-between"]}>
            {props.links?.map((link) => (
              <NavbarItem key={link.label}>
                <NavbarLink to={link.to}>{link.label}</NavbarLink>
              </NavbarItem>
            ))}
          </FlexLayout>
        </FlexLayout>
      </nav>
      <div className="navbar__content-pusher"></div>
    </div>
  );
};

export default Navbar;
