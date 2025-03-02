import React from "react";
import Link from "next/link";
import { paths } from "@/services/settings";

import Container from "../Container/Container";
import styles from "./Footer.module.css";
import Logo from "../Icons/LogoIcon";

function Footer() {
    return (
        <footer className={styles.Wrapper}>
            <Container className={styles.Container}>
                <div className={styles.Promo}>
                    <Logo />
                    <div>Веб-разработка и усиление IT-команд</div>
                </div>
                <div className={styles.Grid}>
                    <div>+7 999 123 45 67</div>
                    <div>hello@cyberia.studio</div>
                    <div>ул.Ярных, д.35, оф.10</div>
                    {Object.entries(paths).map(([key, { label, path }]) => (
                        <Link
                            className={styles.Link}
                            key={key}
                            href={path}>
                            {label}
                        </Link>
                    ))}
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
