
import Image from "next/image";
import styles from "./page.module.css"
import { Search } from "lucide-react";
import { Play } from 'lucide-react';
import logo from '../../public/img/logo-sem-fundo.png';


export default function PaginalInicial() {
  return (
    <div>
      <header className={styles.cabecalho}>
        <Image
          className={styles.imagen}
          src={logo}
          alt={"Logo"}
          width={120}
          height={120}

        />
        <nav className={styles.navegacao}>
          <span className={styles.span}><a href="/inicio">Inicio</a></span>
          <span className={styles.span}><a href="/carros">Carros</a></span>
          <span className={styles.span}><a href="/recomenda">Recomenda IA</a></span>
          <span className={styles.span}><a href="/comparar">Comparar</a></span>
          <span className={styles.span}><a href="/favoritos">Favoritos</a></span>
          <span className={styles.span}><a href="/sobre">Sobre</a></span>
        </nav>
        
          <div className={styles.botoes}>
            <Search className={styles.lupa} size={22} />
            <button className={styles.entrar}>Entrar</button>
            <button className={styles.cadastrar}>Cadastrar</button>
          </div>
      </header>
      <main>
        <h1>
          <strong>
            O SEU DESTINO
          </strong>
          <br />
          <strong style={{ color: "red" }}>
            PARA CARROS ESPORTIVOS
          </strong>
        </h1>
        <h1 style={{ fontSize: 17 }}>
          Explore, compare e encontre o carro dos seus sonhos com <br /> a ajuda da nossa Inteligência Artificial.
        </h1>
        <button className={styles.explorar}><strong>Explorar Carros</strong></button>
        
        <button className={styles.conheca}><strong><Play className={styles.video} size={10}/>Conheça o Rota Motors</strong></button>
      </main>
      <footer></footer>
    </div>
  );
}