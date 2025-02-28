import React from "react";
import Link from "next/link";
import { paths } from "@/services/setiings";

import Container from "../Container/Container";
import styles from "./Header.module.css";
import Logo from "../Icons/LogoIcon";

function Header() {
    return (
        <header className={styles.Wrapper}>
            <Container className={styles.Container}>
                <Link
                    href="/"
                    className={styles.Logo}>
                    <Logo />
                </Link>
                <nav className={styles.Links}>
                    {Object.entries(paths).map(([key, { label, path }]) => (
                        <Link
                            className={styles.Link}
                            key={key}
                            href={path}>
                            {label}
                        </Link>
                    ))}
                </nav>
                <div className={styles.ToolBar}>
                    <div className={styles.LangToggle}>
                        <a href="#">EN</a>
                        <div>/</div>
                        <a href="#">RU</a>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
