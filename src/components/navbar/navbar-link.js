import { NavHashLink } from "react-router-hash-link";
import { styleMapper } from "../../utill/style-mapper";

const OFFSET_Y = 75;

const scrollWithOffset = (el, offset) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yCoordinate - offset, behavior: "smooth" });
};

const NavbarLink = (props) => {
  return (
    <NavHashLink
      activeClassName="navbar__link--active"
      scroll={(el) => scrollWithOffset(el, OFFSET_Y)}
      className={styleMapper("navbar__link", props.styles)}
      to={props.to}
    >
      {props.children}
    </NavHashLink>
  );
};

export default NavbarLink;
