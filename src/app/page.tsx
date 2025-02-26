import Container from "@/components/Container/Container";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Container>
                <h1>Главная</h1>
                <Link href="/cases">Кейсы</Link>
            </Container>
        </main>
    );
}
