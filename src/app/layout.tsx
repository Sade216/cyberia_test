import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";

import { Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const FiraSansCondensed = Fira_Sans_Condensed({
    weight: ["200", "300", "400", "700"],
    subsets: ["latin"],
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
    return (
        <StoreProvider>
            <html lang="ru">
                <body className={`${FiraSansCondensed.className}`}>
                    <Header />
                    <Breadcrumb />
                    {children}
                    <Footer />
                </body>
            </html>
        </StoreProvider>
    );
}
