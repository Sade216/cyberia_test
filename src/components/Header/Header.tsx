import React from "react";
import Link from "next/link";
import { paths } from "@/services/setiings";

import styles from "./Header.module.css";
import Logo from "../Logo/Logo";

function Header() {
    return (
        <header className={styles.Wrapper}>
            <Link
                href="/"
                className={styles.Logo}>
                <Logo />
            </Link>
            <nav className={styles.Links}>
                {paths.map((path, key) => (
                    <Link
                        href={path.path}
                        key={key}
                        className={styles.Link}>
                        {path.lable}
                    </Link>
                ))}
            </nav>
            <div className={styles.ToolBar}>
                <div>Switch</div>
                <div className={styles.LangToggle}>
                    <a href="#">EN</a>
                    <div>/</div>
                    <a href="#">RU</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
