import { featuredProduct } from "@/lib/mockProducts";
import { AdZone } from "./AdZone";

export function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text content */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
              Featured Deal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {featuredProduct.title}
            </h2>
            <p className="text-lg text-indigo-100 max-w-lg">
              {featuredProduct.description}
            </p>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-4xl font-bold">
                ${featuredProduct.price.toLocaleString()}
              </span>
              {featuredProduct.oldPrice && (
                <span className="text-xl text-indigo-200 line-through">
                  ${featuredProduct.oldPrice.toLocaleString()}
                </span>
              )}
            </div>
            <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>

          {/* Product image */}
          <div className="w-full lg:w-[400px]">
            <img
              src={featuredProduct.imageUrl}
              alt={featuredProduct.title}
              className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Ad Zone 1 — leaderboard below promo */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <AdZone width={728} height={90} zoneClass="next-ads-zone-1" id="ad-zone-leaderboard-top" />
        </div>
      </div>
    </section>
  );
}
