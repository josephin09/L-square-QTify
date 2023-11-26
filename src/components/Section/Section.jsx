import React,{useState} from "react";
import {CircularProgress} from '@mui/material';
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from './Section.module.css';

export default function Section ({title, data, type}) {
    const [carouselToggle, setCarouselToggle] = useState(true);
    console.log(data);
    const handleToggle =() => {
        setCarouselToggle((prevState) => !prevState);
    }
    console.log(data);

console.log("Section component data:", data);

    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle ? "Collapse All": "Show All"}</h4>
            </div>
            {data.some(innerArray => innerArray.length === 0) ? (
                <CircularProgress/>
            ):(
                <div className={styles.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {data.map((ele) =>(
                                <Card data={ele} type={type}/>
                            ))}
                        </div>
                    ): (
                    <Carousel 
                    data={data} 
                    renderComponent={(data) => <Card data={data} type={type} />}
                    /> 
                    )}
                </div>
            )} 
        </div>
    )
}