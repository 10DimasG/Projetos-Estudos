"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Img from "../img/carro/mclaren.png";

export default function Comparar() {
    return (
        <div className={styles.containerComparar}>

            <h1 className={styles.comparar}>
                <strong>
                    Compar<span>ar</span>
                </strong>
            </h1>

            <p className={styles.linhaComparar}>
                Escolha dois carros para colocar lado a lado. O melhor de cada
                atributo fica destacado.
            </p>

            <div className={styles.selectComparar}>

                <select
                    className={styles.selectCarro}
                    name="carro1"
                    id="carro1"
                    defaultValue="Lamborghini Aventador"
                >
                    <option value="Lamborghini Aventador">
                        Lamborghini Aventador
                    </option>

                    <option value="Porsche911">
                        Porsche 911
                    </option>

                    <option value="ToyotaGRSupra">
                        Toyota GR Supra
                    </option>

                    <option value="McLaren720">
                        McLaren 720
                    </option>

                    <option value="Ferrari488GTB">
                        Ferrari 488 GTB
                    </option>
                </select>

                <span className={styles.vs}>
                    VS
                </span>

                <select
                    className={styles.selectCarro}
                    name="carro2"
                    id="carro2"
                    defaultValue="Porsche911"
                >
                    <option value="Lamborghini Aventador">
                        Lamborghini Aventador
                    </option>

                    <option value="Porsche911">
                        Porsche 911
                    </option>

                    <option value="ToyotaGRSupra">
                        Toyota GR Supra
                    </option>

                    <option value="McLaren720">
                        McLaren 720
                    </option>

                    <option value="Ferrari488GTB">
                        Ferrari 488 GTB
                    </option>
                </select>

            </div>

            <div className={styles.CarrosComparacao}>

                <div className={styles.carro}>
                    <Image
                        src={Img}
                        alt="McLaren 720"
                    />
                    <div className={styles.Divspans}>
                        <span className={styles.span}><strong>Nome:</strong> Mc Laren 720</span>
                        <span className={styles.span}><strong>Nome:</strong> Mc Laren 720</span>
                    </div>
                </div>

            </div>

        </div>
    );
}
