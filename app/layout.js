import "./globals.css";

export const metadata = {
  title: "Purchase Rec AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-b02 flex justify-center items-center min-h-screen min-w-screen px-16">
        {children}
      </body>
    </html>
  );
}
