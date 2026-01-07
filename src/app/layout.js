// src/app/layout.js
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Safai Portal",
  description: "Municipal washroom portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}