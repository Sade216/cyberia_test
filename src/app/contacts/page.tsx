import Container from "@/components/Container/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Контакты",
    description: "Страница контактов",
};

function Contacts() {
    return (
        <main>
            <Container forPage>
                <h1>Контакты</h1>
            </Container>
        </main>
    );
}

export default Contacts;
