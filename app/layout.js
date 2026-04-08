import "./globals.css";

export const metadata = {
  title: "Next.js Full-Stack ERP",
  description: "A complete School ERP system powered by Node.js, MongoDB, and React App Router.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
