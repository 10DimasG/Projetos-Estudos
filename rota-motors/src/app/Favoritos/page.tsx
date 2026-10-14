import styles from "./page.module.css";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function Favoritos() {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.seta}>
                <Undo2 size={30} />
            </Link>

            <h1 className={styles.texto}>
                Favoritos
            </h1>
        </div>
    );
}