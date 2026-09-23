"use client";

import styles from "./page.module.css";


export default function TelaPythonIa(){
    return(
        <div className={styles.containerIA}> 
            <input className={styles.inputIA}type="text" placeholder="IA" />
        </div>
    );
}