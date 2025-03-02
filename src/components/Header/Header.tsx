"use client";

import React, { useState } from "react";
import Link from "next/link";
import { paths } from "@/services/settings";

import Container from "../Container/Container";
import styles from "./Header.module.css";
import Logo from "../Icons/LogoIcon";
import useIsMobileHook from "@/services/hooks/useIsMobileHook";

function Header() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const isMobile = useIsMobileHook();
    return (
        <header className={styles.Wrapper}>
            <Container className={styles.Container}>
                <Link
                    href="/"
                    className={styles.Logo}>
                    <Logo />
                </Link>
                <nav>
                    <ul className={styles.Links}>
                        {Object.entries(paths).map(([key, { label, path }]) => (
                            <li key={key}>
                                <Link
                                    className={styles.Link}
                                    href={path}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.ToolBar}>
                    {isMobile && (
                        <div
                            className={`${styles.Burger} ${
                                isMenuOpened ? styles.Open : ""
                            }`}
                            onClick={() => setIsMenuOpened(!isMenuOpened)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )}
                </div>
                <div
                    className={`${styles.Backdrop} ${
                        isMenuOpened ? styles.ShowBackdrop : ""
                    }`}
                    onClick={() => setIsMenuOpened(!isMenuOpened)}></div>

                <nav
                    className={`${styles.Drawer} ${
                        isMenuOpened ? styles.Open : ""
                    }`}>
                    <ul className={styles.Menu}>
                        {Object.entries(paths).map(([key, { label, path }]) => (
                            <li key={key}>
                                <Link
                                    className={styles.Link}
                                    href={path}
                                    onClick={()=> setIsMenuOpened(!isMenuOpened)}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <br className={styles.Separator}/>
                    <section className={styles.MenuContacts}>
                        <h3>Контакты: </h3>
                        <ul>
                            <li>+7 999 123 45 67</li>
                            <li>hello@cyberia.studio</li>
                            <li>ул.Ярных, д.35, оф.10</li>
                        </ul>
                    </section>
                    <br className={styles.Separator}/>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
