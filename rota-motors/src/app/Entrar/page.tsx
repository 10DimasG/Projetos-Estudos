"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import Img from "../img/carro/supraFundo.png";


export default function Entrar() {

    const router = useRouter();

    return (
        <div className={styles.containerEntrar}>
            <h1 className={styles.linha}>Login</h1>

            <input className={styles.inputEmail} type="email" placeholder="Email" />
            <input className={styles.inputSenha} type="password" placeholder="Senha" />
            <button className={styles.botaoEntrar}>Entrar</button>
            <button className={styles.botaoCadastrar}>Cadastrar</button>

        </div>
    );
}