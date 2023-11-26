import React from "react";
import {Tooltip,Chip} from "@mui/material";
import styles from "./Card.module.css";
import {Link} from "react-router-dom";

function Card({data, type}) {
    const getCard = (type) => {
        switch(type){
            case "album": {
                const {image, follows, title, slug, songs} = data;
                 // Check if songs is defined before accessing its length
                 const songsLength = Array.isArray(songs) ? songs.length : 0;
                 console.log(data);
                return (
                    <Tooltip title={`${songsLength} songs`} placement="top" arrow>
                        <Link to={`/album/${slug}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="album" loading="load"/>
                                    <div className={styles.banner}>
                                        <Chip label={`${follows} Follows`} size="small"
                                         className={styles.chip} 
                                         style={{ backgroundColor: 'var(--color-black)', color: 'white' }}
                                        />                                  
                                    </div>
                                </div>
                                <div className={styles.titleWrapper}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>   
                    </Tooltip>
                    );
            }
            case "song": {
                const {image, likes, title}= data;
                return(
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="song" loading="load"/>
                                    <div className={styles.pill}>
                                       <p>{likes} Likes</p>
                                    </div>
                                </div>
                                <div className={styles.titleWrapper}>
                                    <p>{title}</p>
                                </div>
                            </div>
                    );
            }
            default:
                return <></>;
        }
    }
    return getCard(type);

}

export default Card;