
import Image from "next/image";
import styles from "./page.module.css"
import  { Search } from "lucide-react" ;

export default function PaginalInicial(){
  return(
    <div>
      <header>
        <Image
        className={styles.imagen} 
         src={"/Img/logo.png"}
         alt={"Logo"}
         width={120}
         height={120}
         
         />
        <nav className={styles.navegacao}>
          <span><a href="/inicio">Inicio</a></span>
          <span><a href="/carros">Carros</a></span>
          <span><a href="/recomenda">Recomenda</a></span>
          <span><a href="/comparar">Comparar</a></span>
          <span><a href="/favoritos">Favoritos</a></span>
          <span><a href="/sobre">Sobre</a></span>

          <Search size={12} />

        </nav>
        <div className={styles.usuario}>
          <button className={styles.entrar}>Entrar</button>
          <button className={styles.criar}>Criar</button>
        </div>
      </header>
      <main></main>
      <footer></footer> 
    </div>
  );
}