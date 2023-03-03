import "./globals.css";

export const metadata = {
    title: "AIFunGames",
    description: "Juegos con IA",
    // ver más opciones https://beta.nextjs.org/docs/api-reference/metadata
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
