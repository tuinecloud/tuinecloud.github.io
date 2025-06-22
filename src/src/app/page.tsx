import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1593032465171-8f785ba67e45"
          alt="Hero banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white space-y-4 text-center px-4">
          <h1 className="text-5xl font-bold">Step Into Fashion</h1>
          <p className="text-lg max-w-lg">Discover trendy clothing crafted for comfort, quality & confidence.</p>
          <a href="/shop" className="px-6 py-3 bg-white text-black rounded-lg font-semibold">Explore Now</a>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-6 bg-background text-foreground">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Looks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              img: "https://images.unsplash.com/photo-1520975869010-4ca1c2f5d7e8",
              title: "Clean Essentials",
              price: "$59.99",
            },
            {
              img: "https://images.unsplash.com/photo-1581574200874-4d1eac1e58a4",
              title: "Urban Streetwear",
              price: "$79.99",
            },
            {
              img: "https://images.unsplash.com/photo-1570158268183-d296b2892211",
              title: "Minimal Polo",
              price: "$39.99",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="relative h-72 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-gray-500 mt-2">{item.price}</p>
                <button className="mt-4 w-full py-2 bg-primary text-white rounded">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
