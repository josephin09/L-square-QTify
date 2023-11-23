import React from "react";
import styles from "./Hero.module.css";
import headphoneImage from "../assets/vibrating-headphone 1.png";

function Hero(){
    return(
        <div className={styles.hero}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img 
                 src={headphoneImage}
                 width={122}
                 alt="headphones"
                />
            </div>
        </div>
    );
}

export default Hero;
