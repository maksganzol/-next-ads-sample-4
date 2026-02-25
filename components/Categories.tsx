import { categories } from "@/lib/mockProducts";
import { Smartphone, Shirt, Home, Dumbbell, Sparkles, BookOpen } from "lucide-react";

const iconMap: Record<string, any> = {
  Smartphone,
  Shirt,
  Home,
  Dumbbell,
  Sparkles,
  BookOpen,
};

export function Categories() {
  return (
    <section className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 py-3 overflow-x-auto">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <a
                key={category.id}
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors whitespace-nowrap text-sm font-medium"
              >
                <Icon size={18} />
                <span>{category.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
