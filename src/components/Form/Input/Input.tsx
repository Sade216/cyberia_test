import React, {
    HTMLInputAutoCompleteAttribute,
    HTMLInputTypeAttribute,
    Ref,
} from "react";

import styles from "./Input.module.css";
import useIsMobileHook from "@/services/hooks/useIsMobileHook";

type TInputProps = {
    id: string;
    labelText: string;
    placeholder?: string;
    type: HTMLInputTypeAttribute;
    className?: string;
    ref?: Ref<HTMLInputElement>;
    autoComplete: HTMLInputAutoCompleteAttribute;
};

function Input(props: TInputProps) {
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
            <input
                className={styles.Input}
                placeholder={isMobile ? props.placeholder : ""}
                ref={props.ref}
                type={props.type}
                id={props.id}
                autoComplete={props.autoComplete}
            />
        </div>
    );
}

export default Input;
