import Link from "next/link";

import Container from "@/components/Container/Container";
import styles from './Main.module.css'

export default function Home() {
    return (
        <main>
            <Container className={styles.Wrapper} forPage>
                <h1>Главная</h1>
                <Link className={styles.Link} href="/cases">Кейсы</Link>
            </Container>
        </main>
    );
}
