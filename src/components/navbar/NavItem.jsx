import Link from "next/link";

function NavItem(props) {
  return (
    <li className="nav-item">
      <Link className="nav-link ms-5 text-light" href={props.url}>
        {props.children}
      </Link>
    </li>
  );
}

export default NavItem;
