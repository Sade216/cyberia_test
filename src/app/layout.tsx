import type { Metadata } from "next";
import { SetupAxios } from "../services/setiings";

import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";

import { Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";

//TODO: проверить fonts
const FiraSansCondensed = Fira_Sans_Condensed({
    weight: ["400"],
    subsets: ["greek"],
});

export const metadata: Metadata = {
    title: "Cyberia test",
    description: "Test app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    SetupAxios();
    return (
        <html lang="ru">
            <body className={`${FiraSansCondensed.className}`}>
                <Header />
                <Breadcrumb />
                {children}
                <Footer />
            </body>
        </html>
    );
}
