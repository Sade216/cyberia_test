import Container from "@/components/Container/Container";
import styles from "./Cases.module.css";
import Projects from "./components/Projects/Projects";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Кейсы",
    description: "Страница кейсов",
};

function Cases() {

    return (
        <main>
            <Container forPage className={styles.Wrapper}>
                <h1>Кейсы</h1>
                <Projects/>
                <FeedbackForm/>
            </Container>
        </main>
    );
}

export default Cases;
