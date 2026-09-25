"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Undo2 } from "lucide-react";
import { MoveUp } from 'lucide-react';

export default function TelaPythonIa() {
    const router = useRouter();
    return (
        <div className={styles.telaIA}>

            <Undo2
                className={styles.seta}
                size={20}
                onClick={() => router.push("/")}
            />

            <div className={styles.mensagens}>
                <div className={styles.mensagemIA}>
                    Olá! Como posso ajudar?
                </div>
            </div>

            <div className={styles.containerIA}>
                <input
                    className={styles.inputIA}
                    type="text"
                    placeholder="Pergunte alguma coisa..."
                />
            <MoveUp className={styles.setaCima}/>
            </div>

        </div>
    );
}
