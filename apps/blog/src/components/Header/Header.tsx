import { FC } from "react";
import { HeaderProps } from "./Header.types";
import styles from "./style.module.css";

const Header: FC<HeaderProps> = () => {
  return <header className={styles.container}></header>;
};

export default Header;
