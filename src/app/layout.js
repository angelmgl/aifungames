import { Alegreya_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "AIFunGames",
    description: "Juegos con IA",
    // ver más opciones https://beta.nextjs.org/docs/api-reference/metadata
};

const font = Alegreya_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={font.className + " bg-gray-800"}>{children}</body>
        </html>
    );
}
