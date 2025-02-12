import { FaHome } from "react-icons/fa";
import { Link } from "react-router";

export default function GoHome() {
  return (
    <Link to="/">
      <FaHome />
    </Link>
  );
}
