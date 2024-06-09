import { GeistSans } from 'geist/font/sans';

import { Toaster } from "@/components/ui/sonner"
import "./globals.css";


export const metadata = {
  title: "Procure Sense",
  description: "Procure Sense is a platform that helps you get insights on your proposals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className} suppressHydrationWarning >
        <main>
          {children}
          <Toaster position="top-right" richColors={true} theme={'light'} />
        </main>
      </body>
    </html>
  );
}
