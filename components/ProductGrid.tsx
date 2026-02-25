import { productList } from "@/lib/mockProducts";
import { ProductCard } from "./ProductCard";
import { AdZone } from "./AdZone";

export function ProductGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Trending Products</h2>
          <a href="#" className="text-primary hover:underline font-medium">View All</a>
        </div>

        <div className="flex gap-8">
          {/* Main product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productList.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}

              {/* Ad Zone 3 — large rectangle in grid */}
              <div className="flex items-center justify-center">
                <AdZone width={336} height={280} zoneClass="next-ads-zone-3" id="ad-zone-grid-rect" />
              </div>

              {productList.slice(3, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Ad Zone 4 — wide billboard */}
            <div className="flex justify-center my-8">
              <AdZone width={970} height={90} zoneClass="next-ads-zone-4" id="ad-zone-billboard" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productList.slice(5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Sidebar with Ad Zone 2 — half-page skyscraper */}
          <div className="hidden xl:block w-[320px] flex-shrink-0">
            <div className="sticky top-36">
              <AdZone width={300} height={600} zoneClass="next-ads-zone-2" id="ad-zone-sidebar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
