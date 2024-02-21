import { Product, products } from "@/app/lib/products";
import { ItemCard } from "@/app/shopping-cart/components";
import { WidgetItem } from "@/components";
import { cookies } from "next/headers";


export const metadata = {
    title: 'Productos en el carrito',
    description: 'Productos en el carrito',
};

interface ProductsInCart {
    product: Product
    quantity: number
}

const getProductsInCart = (cart: { [id: string]: number }): ProductsInCart[] => {
    const productsInCart: ProductsInCart[] = []
    for (const id of Object.keys(cart)) {
        const product = products.find(p => p.id === id)
        if (product) {
            productsInCart.push({
                product: product,
                quantity: cart[id]
            })
        }
    }

    return productsInCart;
}

const getTotalPrice = (productsInCart: ProductsInCart[], discount?: number) => {
    let total = productsInCart.reduce((total, item) => {
        return total + item.product.price * item.quantity 
    }, 0)
    if (discount) {
        total = total * discount
    }
    return total.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

export default function CartPage() {
    const cookiesStore = cookies()
    const cart = JSON.parse(cookiesStore.get('cart')?.value || '{}') as { [id: string]: number }
    const productsInCart = getProductsInCart(cart)

    return (
        <div>
            <h1 className="text-5xl ">Productos en el carrito</h1>
            <hr className="mb-2" />
            <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="flex flex-col gap-2 w-full sm:w-8/12">
                    {
                        productsInCart.map((item) => (
                            <ItemCard key={item.product.id} {...item} />
                        ))
                    }
                </div>

                <div className="flex flex-col w-full sm:w-4/12">
                    <WidgetItem title="Total a pagar">
                        <div className="mt-2 flex justify-center gap-4">
                            <h3 className="text-3xl font-bold text-gray-700">Total: {getTotalPrice(productsInCart, 1.15)}</h3>
                        </div>
                        <span className="font-bold text-center text-gray-500">Impuestos 15%: {getTotalPrice(productsInCart, 0.15) }</span>
                    </WidgetItem>
                </div>
            </div>
        </div>
    );
}
