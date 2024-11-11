import type {Metadata} from "next";
import "./globals.scss";
import {Header} from "@/shared/ui/header";
import Footer from "@/shared/ui/footer";

export const metadata: Metadata = {
    title: "Start Stock",
    description: "Generated by create next app",
};

// TODO: Добавить новый логотип + шрифт

const RootLayout = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="ru" className={"scroll-smooth"}>
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
};

export default RootLayout;