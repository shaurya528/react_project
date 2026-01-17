import { FaRegCircle, FaPen } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Icon({ name }) {
  if (name === "circle") {
    return <FaRegCircle />;
  } else if (name === "cross") {
    return <ImCross />;
  } else {
    return <FaPen />;
  }
}

export default Icon;
