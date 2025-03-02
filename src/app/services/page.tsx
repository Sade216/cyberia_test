import Container from "@/components/Container/Container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Услуги",
    description: "Страница услуг",
};

function Services() {
    return (
        <main>
            <Container forPage>
                <h1>Услуги</h1>
            </Container>
        </main>
    );
}

export default Services;
