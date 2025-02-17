
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCategory } from "@/components/ProductCategory";
import { Features } from "@/components/Features";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { Footer } from "@/components/Footer";
import { SocialButtons } from "@/components/SocialButtons";

const sampleProducts = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 89.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Smartphone Samsung",
    price: 299.99,
    originalPrice: 599.99,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7",
  },
  {
    id: 3,
    name: "MacBook Air",
    price: 799.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 4,
    name: "AirPods Pro",
    price: 159.99,
    originalPrice: 279.99,
    image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ProductCategory title="Meilleures offres" products={sampleProducts} />
        <NewsletterCTA />
        <Features />
      </main>
      <Footer />
      <SocialButtons />
    </div>
  );
};

export default Index;
