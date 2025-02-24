import axios from "axios";

export function SetupAxios() {
    axios.defaults.baseURL = process.env.API_URL;
}

export const paths = [
    {
        path: "/agency",
        lable: "Агенство",
    },
    {
        path: "/services",
        lable: "Услуги",
    },
    {
        path: "/cases",
        lable: "Кейсы",
    },
    {
        path: "/blog",
        lable: "Блог",
    },
    {
        path: "/contacts",
        lable: "Контакты",
    },
];
