const Link = (props) => (
  <Link className="link" to={props.to}>
    {props.children}
  </Link>
);

export default Link;
