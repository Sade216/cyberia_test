"use client";

import React, { SyntheticEvent, useRef, useState } from "react";
import useIsMobileHook from "@/services/hooks/useIsMobileHook";

import { sendFeedback } from "@/lib/projectsApi";
import { useAppDispatch } from "@/lib/store/hooks";
import { TFeedbackResponse } from "@/services/types";

import FeedbackImage from '@/assets/Group.svg'

import styles from "./FeedbackForm.module.css";
import Input from "@/components/Form/Input/Input";
import Textarea from "@/components/Form/Textarea/Textarea";
import Checkbox from "@/components/Form/Checkbox/Checkbox";
import Image from "next/image";

function FeedbackForm() {
    const isMobile = useIsMobileHook();

    const firstNameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const checkboxRef = useRef<HTMLInputElement | null>(null);

    const [error, setError] = useState<TFeedbackResponse | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const dispatch = useAppDispatch();

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();

        if (checkboxRef.current?.checked || isMobile) {
            const data = {
                email: emailRef.current?.value || "",
                phone: phoneRef.current?.value || "",
                message: messageRef.current?.value || "",
                name: firstNameRef.current?.value || "",
            };

            dispatch(sendFeedback(data))
                .unwrap()
                .then((data) => {
                    if (data.message === "Feedback accepted.") {
                        setSuccess("Форма успешно отправлена.");
                    } else {
                        setSuccess(data.message);
                    }
                    setError(null);
                })
                .catch((err: TFeedbackResponse) => {
                    setError({ message: err.message, errors: err.errors });
                });
        } else {
            setError({
                message:
                    "Подтвердите согласие на обработку персональных данных",
            });
        }
    }

    return (
        <section className={styles.Wrapper}>
            <div className={styles.Title}>
                <Image src={FeedbackImage} alt="feedback-image"/>
                <h1>
                    Расскажите
                    <br />о вашем проекте:
                </h1>
            </div>
            <form
                className={styles.Form}
                onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.Inputs}>
                    <Input
                        id="name"
                        type="text"
                        labelText="Ваше имя*"
                        placeholder="Ваше имя*"
                        ref={firstNameRef}
                        autoComplete="given-name"
                    />
                    <Input
                        id="email"
                        type="email"
                        labelText="Email*"
                        placeholder="Email*"
                        ref={emailRef}
                        autoComplete="email"
                    />
                    <Input
                        id="phone"
                        type="tel"
                        labelText="Телефон*"
                        placeholder="Телефон*"
                        ref={phoneRef}
                        autoComplete="tel"
                    />
                </div>
                <Textarea
                    id="message"
                    labelText="Сообщение*"
                    placeholder="Сообщение*"
                    ref={messageRef}
                />
                {error && (
                    <div className={styles.ErrorText}>
                        <div>{error.message}</div>
                        {error.errors?.name && (
                            <>
                                {error.errors.name.map((item, key) => (
                                    <div key={key}>{item}</div>
                                ))}
                            </>
                        )}
                        {error.errors?.email && (
                            <>
                                {error.errors.email.map((item, key) => (
                                    <div key={key}>{item}</div>
                                ))}
                            </>
                        )}
                        {error.errors?.phone && (
                            <>
                                {error.errors.phone.map((item, key) => (
                                    <div key={key}>{item}</div>
                                ))}
                            </>
                        )}
                        {error.errors?.message && (
                            <>
                                {error.errors.message.map((item, key) => (
                                    <div key={key}>{item}</div>
                                ))}
                            </>
                        )}
                    </div>
                )}
                {success && (
                    <div className={styles.SuccessText}>{`${success}`}</div>
                )}
                {!isMobile && (
                    <Checkbox
                        id="checkPersonalData"
                        labelText="Согласие на обработку персональных данных"
                        ref={checkboxRef}
                    />
                )}
                <button
                    className={styles.SubmitButton}
                    type="submit">
                    Обсудить проект
                </button>
                {isMobile && (
                    <p className={styles.Annotaion}>
                        Нажимая “Отправить”, Вы даете согласие на обработку
                        персональных данных
                    </p>
                )}
            </form>
        </section>
    );
}

export default FeedbackForm;
