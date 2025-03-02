import Container from "@/components/Container/Container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Блог",
    description: "Страница блога",
};

function Blog() {
    return (
        <main>
            <Container forPage>
                <h1>Блог</h1>
            </Container>
        </main>
    );
}

export default Blog;
