import {Inter} from "next/font/google";
import {NextUIProvider} from "@nextui-org/react";
import "./globals.css";
import {ScrollShadow} from "@nextui-org/scroll-shadow";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Smart City",
    description: "Smart City Management is a platform that helps you to manage your city in a smart way. It provides you with real-time data, city services, and much more.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ScrollShadow size={100}>
                    <NextUIProvider>{children}</NextUIProvider>
                </ScrollShadow>
            </body>
        </html>
    );
}
