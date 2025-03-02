import Container from "@/components/Container/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Агенство",
    description: "Страница агенства",
};

function Agency() {
    return (
        <main>
            <Container forPage>
                <h1>Агенство</h1>
            </Container>
        </main>
    );
}

export default Agency;
