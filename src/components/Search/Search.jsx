import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "../assets/Search icon.svg";


function Search({placeholder}){
    const onSubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} placeholder={placeholder} required/>
            <button className={styles.searchButton} type="submit">
            <img src={SearchIcon} alt="Search Icon" />
            </button>
        </form>
    )
}

export default Search;