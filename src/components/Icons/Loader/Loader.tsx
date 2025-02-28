import React from "react";

import styles from "./Loader.module.css";

function Loader({className = ''}) {
    return (
        <div className={className}>
            <svg
                className={styles.Loader}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
        </div>
    );
}

export default Loader;
