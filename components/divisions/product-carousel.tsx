"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
    name: string;
    category: string;
    composition: string;
    image: string;
};

type Props = {
    products: Product[];
};

export default function ProductCarousel({ products }: Props) {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % products.length);
    };

    const prev = () => {
        setCurrent((prev) =>
            prev === 0 ? products.length - 1 : prev - 1
        );
    };

    return (
        <section className="bg-[#F5F9FF] py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-14 text-center">

                    <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
                        Product Portfolio
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-[#1E3A8A]">
                        Featured Products
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#F97316]" />

                </div>

                {/* Card */}

                <div className="relative overflow-hidden rounded-[30px] border border-blue-100 bg-white shadow-xl">

                    <div className="grid items-center gap-10 p-10 lg:grid-cols-2">

                        {/* Image */}

                        <div className="flex justify-center">

                            <img
                                src={products[current].image}
                                alt={products[current].name}
                                className="max-h-[420px] object-contain transition-all duration-500"
                            />

                        </div>

                        {/* Content */}

                        <div>

                            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F97316]">
                                {products[current].category}
                            </span>

                            <h3 className="mt-6 text-4xl font-bold text-[#1E3A8A]">
                                {products[current].name}
                            </h3>

                            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#F97316]" />

                            <p className="mt-8 text-lg leading-8 text-slate-600">
                                {products[current].composition}
                            </p>

                        </div>

                    </div>

                    {/* Left */}

                    <button
                        onClick={prev}
                        className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110 hover:bg-[#1E3A8A] hover:text-white"
                    >
                        <ChevronLeft />
                    </button>

                    {/* Right */}

                    <button
                        onClick={next}
                        className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110 hover:bg-[#1E3A8A] hover:text-white"
                    >
                        <ChevronRight />
                    </button>

                </div>

                {/* Indicators */}

                <div className="mt-10 flex justify-center gap-3">

                    {products.map((_, index) => (

                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-3 w-10 rounded-full transition-all ${current === index
                                    ? "bg-[#1E3A8A]"
                                    : "bg-blue-200"
                                }`}
                        />

                    ))}

                </div>

            </div>
        </section>
    );
}