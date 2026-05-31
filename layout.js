import "./globals.css";

export const metadata = {
  title: "Монголын Оёдлын Нэгдсэн Холбоо",
  description:
    "Монголд оёдлын үйлдвэрлэлийг хөгжүүлэх, дэлхийн түвшинд дүйцэхүйц загвар хийц, чанартай оёмол бүтээгдэхүүн үйлдвэрлэх. МОНХ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="lock">{children}</body>
    </html>
  );
}
