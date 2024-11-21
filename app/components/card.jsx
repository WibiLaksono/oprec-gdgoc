"use client";

import { useRouter } from "next/navigation";

export default function Card() {

    const router = useRouter();
    // Data array untuk produk
    const products = [
        {
            image: "benda1.png",
            name: "Graphic Design",
            description: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
        },
        {
            image: "benda2.png",
            name: "Modern Bowl Set",
            description: "Kitchen Essentials",
            originalPrice: "$20.00",
            discountedPrice: "$12.00",
        },
        {
            image: "benda3.png",
            name: "Luxury Cutlery",
            description: "Dining Set",
            originalPrice: "$35.00",
            discountedPrice: "$24.50",
        },
        {
            image: "benda4.png",
            name: "Decorative Plate",
            description: "Home Decor",
            originalPrice: "$18.50",
            discountedPrice: "$9.25",
        },
        {
            image: "benda5.png",
            name: "Elegant Glassware",
            description: "Dining Essentials",
            originalPrice: "$25.00",
            discountedPrice: "$15.00",
        },
        {
            image: "benda6.png",
            name: "Minimalist Vase",
            description: "Home Decor",
            originalPrice: "$22.00",
            discountedPrice: "$11.00",
        },
        {
            image: "benda7.png",
            name: "Premium Utensils",
            description: "Kitchen Tools",
            originalPrice: "$30.00",
            discountedPrice: "$19.50",
        },
        {
            image: "benda8.png",
            name: "Artistic Coaster Set",
            description: "Dining Accessories",
            originalPrice: "$12.00",
            discountedPrice: "$6.00",
        },
    ];

    const handleCardClick = (product) => {
        router.push(`/shop?product=${encodeURIComponent(product.name)}`);
    };

    return (
        <div className="mx-[7vw]">
            <div>
                <h2 className="text-slate-700 font-Montserrat font-semibold text-center md:text-start">
                    BESTSELLER PRODUCTS
                </h2>
                <img src="Rectangle 1.svg" alt="" className="w-full h-full mt-5"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-white w-full h-[60vh] rounded-xl shadow-lg hover:shadow-xl"
                        onClick={() => handleCardClick(product)}
                    >
                        <div className="h-[70%] w-full">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-t-xl"
                            />
                        </div>
                        <div className="h-[30%] flex flex-col justify-center px-4">
                            <h1 className="font-bold text-lg text-slate-700">
                                {product.name}
                            </h1>
                            <h2 className="text-sm text-slate-500">
                                {product.description}
                            </h2>
                            <p className="mt-2">
                                <span className="line-through text-sm text-slate-400">
                                    {product.originalPrice}
                                </span>{" "}
                                <span className="text-lg font-bold text-green-600">
                                    {product.discountedPrice}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
