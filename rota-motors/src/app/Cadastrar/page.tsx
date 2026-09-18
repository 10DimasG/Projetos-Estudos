"use client";


import styles from "./page.module.css";
import { Pointer, Undo2 } from 'lucide-react'; 
import { useRouter } from "next/navigation";


export default function Cadastrar(){

    return(
        <div className={styles.containerCadastrar}>
           <h1 className={styles.linha}>Entrar</h1>

           <input className={styles.inputEmail} type="text" placeholder="Email:" /> 
           <input className={styles.inputSenha} type="password" placeholder="Senha:" />
           
           <button className={styles.botaoEntrar}>Enviar</button>
           <button className={styles.botaologin}>Login</button> 
        </div>
    );
}