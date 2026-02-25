import { ProductItem } from "@/lib/mockProducts";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: ProductItem;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
              -{product.discount}%
            </span>
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <span className="text-xs text-gray-500 uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
          {product.title}
        </h3>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button className="p-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
