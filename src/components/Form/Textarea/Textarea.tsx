import React, { Ref } from "react";

import styles from "./Textarea.module.css";
import useIsMobileHook from "@/services/hooks/useIsMobileHook";

type TTextareaProps = {
    id: string;
    labelText: string;
    placeholder?: string;
    className?: string;
    ref?: Ref<HTMLTextAreaElement>;
};

function Textarea(props: TTextareaProps) {
    const isMobile = useIsMobileHook();
    return (
        <div
            className={`${styles.Wrapper} ${
                props.className && props.className
            }`}>
            {!isMobile && (
                <label
                    className={styles.Label}
                    htmlFor={props.id}>
                    {props.labelText}
                </label>
            )}
            <textarea
                className={styles.Textarea}
                placeholder={isMobile ? props.placeholder : ""}
                ref={props.ref}
                id={props.id}
                autoComplete="off"
            />
        </div>
    );
}

export default Textarea;
