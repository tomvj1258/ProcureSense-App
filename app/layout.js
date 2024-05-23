import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { AnalysisProvider } from '../contexts/analysis.context.js';

export const metadata = {
  title: "Procure Sense",
  description: "A platform for analyzing procurement documents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <AnalysisProvider>
          {children}
        </AnalysisProvider>
      </body>
    </html>
  );
}
