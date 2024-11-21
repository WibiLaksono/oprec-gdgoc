"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function DetailComponent() {
    const searchParams = useSearchParams();
    const productName = searchParams.get("product") || "Default Product";
    const productDiscount = searchParams.get("discountedPrice") || "Free";
    const imagebesar = searchParams.get("images") || "/benda1.png";

    const images = [imagebesar, "/bghero.jpg"];
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="mt-5 mb-20 mx-[7vw] flex flex-col gap-8">
            {/* Breadcrumb */}
            <div className="mb-5 text-sm text-gray-500">
                <Link href="/" className="text-slate-700 font-Montserrat font-semibold text-xl hover:underline">
                    Home
                </Link>
                <span className="mx-1 text-base">{">"}</span>
                <Link href="/shop" className="font-Montserrat text-xl hover:underline">
                    Shop
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-14 w-full">
                {/* Image Section */}
                <div className="flex-1">
                    <div className="relative h-[50vh] sm:h-[70vh] w-full bg-gray-100 rounded-md overflow-hidden">
                        <img src={mainImage} alt="Main" className="object-cover w-full h-full" />
                        {/* Arrow Navigation */}
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-700 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                            onClick={() =>
                                setMainImage(
                                    images[(images.indexOf(mainImage) - 1 + images.length) % images.length]
                                )
                            }
                        >
                            &#8249;
                        </button>
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-700 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                            onClick={() =>
                                setMainImage(
                                    images[(images.indexOf(mainImage) + 1) % images.length]
                                )
                            }
                        >
                            &#8250;
                        </button>
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex gap-2 mt-4">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thumbnail ${idx}`}
                                className={`w-16 h-16 rounded-md object-cover cursor-pointer border ${
                                    mainImage === img
                                        ? "border-blue-500"
                                        : "border-gray-300 hover:border-blue-500"
                                }`}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex-1 mt-3 space-y-4">
                    <h1 className="text-2xl mt-2 font-bold font-Montserrat text-gray-800">{productName}</h1>
                    <div className="flex items-center gap-2 font-Montserrat">
                        <span className="text-yellow-500 text-4xl">★★★★★</span>
                        <span className="text-sm text-gray-500">(10 Reviews)</span>
                    </div>
                    <p className="text-3xl mt-3 font-semibold font-Montserrat text-gray-900">{productDiscount}</p>
                    <p className="text-sm font-Montserrat text-gray-500">
                        Availability: <span className="text-green-500 font-medium ">In Stock</span>
                    </p>
                    <p className="text-gray-600 font-Montserrat py-6">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
                        official consequent door ENIM RELIT Mollie. Excitation venial consequent
                        sent nostrum met.
                    </p>
                    <img src="hr.svg" alt="" />

                    {/* Color Selection */}
                    <div className="flex items-center py-5 gap-2">
                        {["bg-green-500", "bg-blue-500", "bg-orange-500", "bg-black"].map((color, idx) => (
                            <div key={idx} className={`${color} w-6 h-6 rounded-full cursor-pointer`} />
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center py-8 gap-4">
                        <button className="bg-blue-500 text-white font-Montserrat px-6 py-2 rounded-md hover:bg-blue-600">
                            Select Options
                        </button>
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">❤</button>
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">🛒</button>
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">👁</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Detail() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DetailComponent />
        </Suspense>
    );
}
