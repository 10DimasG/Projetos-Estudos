"use client";


import styles from "./page.module.css";
import { Pointer, Undo2 } from 'lucide-react';
import { useRouter } from "next/navigation";


export default function Carros(){

    const router = useRouter();
    return(
        <div className={styles.containerCarros}>
            <Undo2 className={styles.seta} size={20} onClick={() => router.push("/")}/>
            <input className={styles.caixa} type="text" placeholder="Ex: Lamborghini Avetador"/>
        </div>
    );
}