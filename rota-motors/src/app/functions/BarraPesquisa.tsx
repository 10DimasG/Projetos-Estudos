"use client";

import styles from "./page.module.css"
import { Search } from "lucide-react";



export default function BarraPesquisa() {
    return (
        <div className={styles.containerPesquisa}>
            <div className={styles.botoes}>
                <Search className={styles.lupa} size={22} />
                <input type="Pesquisar" placeholder="Ex: Lamborghini Aventador" />
                <button className={styles.entrar}>Enviar</button>
            </div>
        </div>

    );
}