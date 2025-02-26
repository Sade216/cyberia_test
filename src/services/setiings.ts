import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const paths = {
    agency: { path: "/agency", label: "Агенство" },
    services: { path: "/services", label: "Услуги" },
    cases: { path: "/cases", label: "Кейсы" },
    blog: { path: "/blog", label: "Блог" },
    contacts: { path: "/contacts", label: "Контакты" },
};
