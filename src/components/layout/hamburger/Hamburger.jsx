import { useState } from "react";
import styles from "./Hamburger.module.scss";
import { FiMenu } from "react-icons/fi";
import Menu from "./Menu";
import { IoClose } from "react-icons/io5";

const Hamburger = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="{styles.wrapper}">
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? <IoClose color="white" /> : <FiMenu color="white" />}
      </button>
      <Menu isShow={isShow} />
    </div>
  );
};

export default Hamburger;
