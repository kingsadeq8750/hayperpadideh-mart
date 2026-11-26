import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "هایپر پدیده | میوه، پروتئین و آبمیوه",
  description: "سفارش آنلاین میوه تازه، سبزیجات، گوشت، مرغ و آبمیوه طبیعی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 text-gray-800 antialiased">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-600">هایپر پدیده</h1>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#" className="text-green-600">صفحه اصلی</a>
              <a href="#" className="hover:text-green-600 transition">میوه و سبزیجات</a>
              <a href="#" className="hover:text-green-600 transition">گوشت و مرغ</a>
              <a href="#" className="hover:text-green-600 transition">آبمیوه</a>
            </nav>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium cursor-pointer hover:text-green-600">ورود / ثبت‌نام</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                سبد خرید (۰)
              </button>
            </div>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-12 text-center text-sm">
          <p>© ۱۴۰۳ هایپر پدیده. تمامی حقوق محفوظ است.</p>
          <p className="mt-2 text-gray-400">پشتیبانی: ۰۲۱-۱۲۳۴۵۶۷۸</p>
        </footer>
      </body>
    </html>
  );
}
