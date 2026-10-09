"use client";

import styles from "./page.module.css";
import { ArrowDown, ArrowRight, Gauge, Sparkles, Trophy } from "lucide-react";

export default function Sobre() {
  return (
    <main className={styles.containerSobre}>

      {/* HERO */}
      <section className={styles.hero}>

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>

          <span className={styles.eyebrow}>
            ROTA MOTORS • NOSSA HISTÓRIA
          </span>

          <h1>
            Toda máquina
            <span> tem uma história.</span>
          </h1>

          <p>
            E toda história começa com uma escolha.
            A nossa começou com uma paixão por carros,
            performance e pela liberdade de encontrar a própria rota.
          </p>

          <a href="#historia" className={styles.heroButton}>
            Descobrir nossa história
            <ArrowDown size={18} />
          </a>

        </div>

        <div className={styles.heroBottom}>
          <span>01</span>
          <div></div>
          <span>03</span>
        </div>

      </section>


      {/* INTRODUÇÃO */}
      <section className={styles.intro}>

        <div className={styles.introLabel}>
          <span>01</span>
          <p>O COMEÇO</p>
        </div>

        <div className={styles.introText}>
          <p className={styles.smallText}>
            MAIS DO QUE CARROS
          </p>

          <h2>
            Não é apenas sobre
            <span> chegar mais rápido.</span>
          </h2>

          <p>
            A Rota Motors nasceu de uma ideia simples:
            carros esportivos não são apenas máquinas.
            Eles representam sonhos, conquistas, personalidade
            e a vontade de ir além.
          </p>
        </div>

      </section>


      {/* HISTÓRIA */}
      <section id="historia" className={styles.historia}>

        <div className={styles.historiaHeader}>

          <span>02 — A ROTA</span>

          <h2>
            O sonho nunca foi
            <span> apenas o carro.</span>
          </h2>

        </div>


        <div className={styles.historiaGrid}>

          <div className={styles.historiaNumero}>
            <span>01</span>
            <div></div>
          </div>

          <div className={styles.historiaTexto}>

            <p>
              Durante anos, ele olhou para carros esportivos
              apenas de longe.
            </p>

            <p>
              Via as máquinas passando pela cidade.
              Via vídeos na internet. Observava a velocidade,
              o design, o som do motor.
            </p>

            <p>
              Mas, para ele, aquilo parecia pertencer
              a outra realidade.
            </p>

            <p className={styles.fraseGrande}>
              Ele tinha apenas um sonho.
            </p>

            <p>
              Um dia, ter o seu próprio carro.
            </p>

          </div>

        </div>


        <div className={styles.historiaDestaque}>

          <div className={styles.destaqueNumero}>
            02
          </div>

          <div>

            <p>
              Não precisava ser o mais caro.
              <br />
              Não precisava ser o mais rápido.
            </p>

            <h3>
              Só precisava ser dele.
            </h3>

          </div>

        </div>


        <div className={styles.historiaGrid}>

          <div className={styles.historiaNumero}>
            <span>03</span>
            <div></div>
          </div>

          <div className={styles.historiaTexto}>

            <p>
              Os anos passaram.
            </p>

            <p>
              Vieram os estudos, o trabalho, os dias difíceis,
              as escolhas e as dúvidas.
            </p>

            <p>
              Enquanto algumas pessoas diziam que era
              apenas um carro, ele sabia que não era.
            </p>

            <p className={styles.fraseGrande}>
              Era tudo aquilo que aquele carro representava.
            </p>

            <div className={styles.listaValores}>

              <span>Cada hora trabalhada.</span>
              <span>Cada dificuldade superada.</span>
              <span>Cada escolha para continuar.</span>

            </div>

          </div>

        </div>

      </section>


      {/* MOMENTO */}
      <section className={styles.momento}>

        <div className={styles.momentoOverlay}></div>

        <div className={styles.momentoContent}>

          <span>O MOMENTO</span>

          <h2>
            Até que chegou
            <strong> o momento.</strong>
          </h2>

          <p>
            Ele entrou no carro.
            Colocou as mãos no volante.
            Olhou para frente.
          </p>

          <p>
            Por alguns segundos, ficou em silêncio.
          </p>

          <p>
            Então ligou o motor.
          </p>

          <div className={styles.motorLine}>
            <Gauge size={22} />
            <span>O som preencheu o ambiente.</span>
          </div>

        </div>

      </section>


      {/* DESCOBERTA */}
      <section className={styles.descoberta}>

        <span>03 — A DESCOBERTA</span>

        <h2>
          O destino nunca foi
          <span> apenas chegar.</span>
        </h2>

        <p>
          Naquele instante, ele percebeu que o sonho nunca
          foi apenas chegar ao carro.
        </p>

        <p className={styles.textoForte}>
          O verdadeiro sonho era descobrir até onde
          aquela estrada poderia levá-lo.
        </p>

      </section>


      {/* PILARES */}
      <section className={styles.pilares}>

        <div className={styles.pilaresTitulo}>
          <span>NOSSA ESSÊNCIA</span>

          <h2>
            Por que existe
            <span> a Rota Motors?</span>
          </h2>
        </div>

        <div className={styles.cards}>

          <article className={styles.card}>

            <div className={styles.cardIcon}>
              <Gauge />
            </div>

            <span>01</span>

            <h3>Performance</h3>

            <p>
              Para quem entende que dirigir pode ser
              uma experiência muito maior do que simplesmente
              chegar ao destino.
            </p>

          </article>


          <article className={styles.card}>

            <div className={styles.cardIcon}>
              <Sparkles />
            </div>

            <span>02</span>

            <h3>Experiência</h3>

            <p>
              Cada detalhe importa. Do primeiro olhar
              ao momento em que você segura o volante.
            </p>

          </article>


          <article className={styles.card}>

            <div className={styles.cardIcon}>
              <Trophy />
            </div>

            <span>03</span>

            <h3>Conquista</h3>

            <p>
              Porque algumas máquinas representam anos
              de trabalho, dedicação e sonhos realizados.
            </p>

          </article>

        </div>

      </section>


      {/* FINAL */}
      <section className={styles.final}>

        <div className={styles.finalGlow}></div>

        <div className={styles.finalContent}>

          <p className={styles.finalLabel}>
            TODA HISTÓRIA TEM UMA DIREÇÃO
          </p>

          <h2>
            E toda máquina...
          </h2>

          <h3>
            tem uma rota.
          </h3>

          <div className={styles.finalLine}></div>

          <p className={styles.finalBrand}>
            ROTA MOTORS
          </p>

          <p className={styles.slogan}>
            Sua máquina. Seu destino. Sua rota.
          </p>

          <a href="/carros" className={styles.finalButton}>
            Encontre sua máquina
            <ArrowRight size={20} />
          </a>

        </div>

      </section>


      <footer className={styles.footerSobre}>

        <div>
          <h2>ROTA<span>MOTORS</span></h2>
          <p>
            Performance encontra propósito.
          </p>
        </div>

        <div className={styles.footerRight}>
          <p>© 2026 Rota Motors</p>
          <p>Todos os direitos reservados.</p>
        </div>

      </footer>

    </main>
  );
}   