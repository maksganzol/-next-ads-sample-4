import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Categories />
        <PromoBanner />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
