"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Play, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import logo from "./img/logo.png";
import carro from "./img/carro/supraFundo.png";

export default function PaginalInicial() {
  const router = useRouter();

  return (
    <div className={styles.pagina}>
      <header className={styles.cabecalho}>
        <Image
          className={styles.logo}
          src={logo}
          alt="Logo Rota Motors"
          width={120}
          height={120}
          priority
        />

        <nav className={styles.navegacao}>
          <Link href="/telaCompra">Comprar</Link>
          <Link href="/carros">Carros</Link>
          <Link href="/recomenda">Recomenda IA</Link>
          <Link href="/comparar">Comparar</Link>
          <Link href="/favoritos">Favoritos</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>

        <div className={styles.botoes}>
          <button
            type="button"
            onClick={() => router.push("/Entrar")}
            className={styles.entrar}
          >
            Entrar
          </button>

          <button
            type="button"
            onClick={() => router.push("/Cadastrar")}
            className={styles.cadastrar}
          >
            Cadastrar
          </button>
        </div>
      </header>

      <main className={styles.mano}>
        <Image
          className={styles.videoFundo}
          src={carro}
          alt="Carro esportivo"
          fill
          priority
          sizes="100vw"
        />

        <div className={styles.overlay} />

        <div className={styles.conteudo}>
          <h1 className={styles.linha1}>
            <strong>O SEU DESTINO</strong>
            <br />

            <strong className={styles.textoVermelho}>
              PARA CARROS ESPORTIVOS
            </strong>
          </h1>

          <p className={styles.descricao}>
            Explore, compare e encontre o carro dos seus sonhos com
            <br />
            a ajuda da nossa Inteligência Artificial.
          </p>

          <div className={styles.botao}>
            <button
              type="button"
              className={styles.explorar}
              onClick={() => router.push("/carros")}
            >
              <strong>Explorar Carros</strong>
              <ArrowRight size={16} className={styles.seta} />
            </button>

            <button
              type="button"
              className={styles.conheca}
              onClick={() => router.push("/sobre")}
            >
              <Play size={14} className={styles.video} />
              <strong>Conheça o Rota Motors</strong>
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
