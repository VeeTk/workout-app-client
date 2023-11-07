import styles from "./Header.module.scss";
import { useAuth } from "../../../hooks/useAuth";
import { BiLeftArrowAlt } from "react-icons/bi";
import Hamburger from "../hamburger/Hamburger"

const Header = ({ backLink }) => {
  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      <button onClick={() => {}}>
        <BiLeftArrowAlt />
      </button>
      {/* User profile */}
      <Hamburger />
    </header>
  );
};

export default Header;
