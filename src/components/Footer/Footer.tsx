import React from "react";

import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";

function Footer() {
    return (
        <footer className={styles.Wrapper}>
            <div>
                <Logo />
                <div>Веб-разработка и усиление IT-команд</div>
            </div>
            <div>
                <div>+7 999 123 45 67</div>
                <div>hello@cyberia.studio</div>
                <div>ул.Ярных, д.35, оф.10</div>
                <div>hello@cyberia.studio</div>
                <div>hello@cyberia.studio</div>
                <div>hello@cyberia.studio</div>
                <div>hello@cyberia.studio</div>
            </div>
        </footer>
    );
}

export default Footer;
