'use client'

import Image from 'next/image'

const brands = [
    { image: '/brands/brand_one.jpeg' },
    { image: '/brands/brand_two.jpeg' },
    { image: '/brands/brand_three.jpeg' },
    { image: '/brands/brand_four.jpeg' },
]

export function OurBrands() {
    return (
        <section className="py-14 bg-[#f5f7fb]">
            <div className="mx-auto max-w-6xl px-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {brands.map((brand, i) => (
                        <div
                            key={i}
                            className="
                rounded-3xl
                border
                border-[#d8e3f5]
                bg-[#edf4ff]
                p-3
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
                        >
                            {/* Inner Box */}
                            <div
                                className="
                                relative
                                aspect-[16/9]
                                w-full
                                rounded-2xl
                                border-2
                                border-[#d29ad8]
                                overflow-hidden
                                bg-white
                                     "
                            >
                                <Image
                                    src={brand.image}
                                    alt="Brand"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}