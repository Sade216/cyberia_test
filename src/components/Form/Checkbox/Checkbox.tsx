import React, { Ref } from "react";

import styles from "./Checkbox.module.css";

type TCheckboxProps = {
    id: string;
    labelText?: string;
    className?: string;
    ref?: Ref<HTMLInputElement>;
    disabled?: boolean,
};

function Checkbox(props: TCheckboxProps) {
    return (
        <div className={`${styles.Wrapper} ${props.className ? props.className : ''}`}>
            <input
                className={styles.Checkbox}
                type="checkbox"
                id={props.id}
                ref={props.ref}
                disabled={props.disabled}
            />
            {props.labelText && (
                <label
                    className={styles.CheckboxLabel}
                    htmlFor={props.id}>
                    {props.labelText}
                </label>
            )}
        </div>
    );
}

export default Checkbox;
