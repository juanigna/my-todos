import { products } from "@/app/lib/products";
import { ProductCard } from "@/components/products";

export default function ProductPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

            {
                products.map(prod => (
                    <ProductCard key={prod.id} {...prod} />
                ))
            }


        </div>
    );
}