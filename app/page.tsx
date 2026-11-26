import { Apple, Beef, CupSoda, Carrot, ChevronLeft } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "میوه تازه", icon: <Apple size={32} />, color: "bg-red-50 text-red-600", border: "border-red-100" },
    { name: "سبزیجات", icon: <Carrot size={32} />, color: "bg-green-50 text-green-600", border: "border-green-100" },
    { name: "گوشت و مرغ", icon: <Beef size={32} />, color: "bg-rose-50 text-rose-600", border: "border-rose-100" },
    { name: "آبمیوه طبیعی", icon: <CupSoda size={32} />, color: "bg-orange-50 text-orange-600", border: "border-orange-100" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-green-600 rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-center mb-12 shadow-lg">
        <div>
          <h2 className="text-3xl font-bold mb-4">میوه تازه را از پدیده بخواهید!</h2>
          <p className="text-green-100 mb-6 max-w-md">
            ارسال سریع، کیفیت تضمینی و تازگی روزانه. همین حالا سفارش دهید و درب منزل تحویل بگیرید.
          </p>
          <button className="bg-white text-green-700 px-6 py-2 rounded-xl font-bold hover:bg-gray-100 transition">
            مشاهده محصولات
          </button>
        </div>
        <div className="mt-8 md:mt-0 text-8xl">
          🍉
        </div>
      </div>

      <div className="mb-8 flex justify-between items-center">
        <h3 className="text-xl font-bold">دسته‌بندی‌های اصلی</h3>
        <a href="#" className="text-green-600 text-sm flex items-center gap-1 hover:underline">
          مشاهده همه <ChevronLeft size={16} />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className={`${cat.color} ${cat.border} border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-md transition`}>
            <div className="p-3 bg-white rounded-full shadow-sm">
              {cat.icon}
            </div>
            <span className="font-bold text-lg">{cat.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold mb-6">پیشنهاد ویژه امروز</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col">
              <div className="bg-gray-100 h-40 rounded-xl mb-4 flex items-center justify-center text-gray-400">
                تصویر محصول
              </div>
              <h4 className="font-bold text-lg mb-2">محصول نمونه {item}</h4>
              <p className="text-sm text-gray-500 mb-4">توضیحات کوتاه درباره تازگی و کیفیت این محصول.</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-bold text-green-600 text-lg">۱۲۰,۰۰۰ تومان</span>
                <button className="bg-green-50 text-green-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-100 transition">
                  افزودن به سبد
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
