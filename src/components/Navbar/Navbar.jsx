import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar(){
    const greenColor = "#34C94B";
    return(
        <nav className={styles.navbar}>
            <a href="/">
            <Logo/>
            </a>
            <Search placeholder="Search a album of your choice"/>
            <Button textColor={greenColor}>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;