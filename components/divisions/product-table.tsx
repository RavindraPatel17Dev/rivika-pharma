import React from "react";

type Product = {
    category: string;
    name: string;
    composition: string;
};

type Props = {
    products: Product[];
};

export default function ProductTable({ products }: Props) {
    const grouped = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }

        acc[product.category].push(product);

        return acc;
    }, {} as Record<string, Product[]>);

    return (
        <section className="bg-[#F5F9FF] py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-14 text-center">

                    <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
                        Product Catalogue
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-[#1E3A8A]">
                        Complete Product Portfolio
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#F97316]" />

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        Explore our comprehensive range of trusted pharmaceutical products,
                        carefully categorized to support better healthcare outcomes.
                    </p>

                </div>

                {/* Table */}

                <div className="overflow-hidden rounded-[30px] border border-blue-100 bg-white shadow-xl">

                    <table className="w-full border-collapse">

                        {/* Header */}

                        <thead className="bg-[#1E3A8A] text-white">

                            <tr>

                                <th className="w-[38%] px-8 py-5 text-left text-lg font-semibold">
                                    Product Name
                                </th>

                                <th className="px-8 py-5 text-left text-lg font-semibold">
                                    Composition
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {Object.entries(grouped).map(([category, items]) => (

                                <React.Fragment key={category}>

                                    {/* Category */}

                                    <tr className="bg-blue-50">

                                        <td
                                            colSpan={2}
                                            className="border-t border-blue-100 px-8 py-4 text-base font-bold uppercase tracking-wider text-[#1E3A8A]"
                                        >
                                            {category}
                                        </td>

                                    </tr>

                                    {/* Products */}

                                    {items.map((item, index) => (

                                        <tr
                                            key={`${category}-${item.name}`}
                                            className={`transition hover:bg-blue-50 ${index !== items.length - 1
                                                    ? "border-b border-slate-100"
                                                    : ""
                                                }`}
                                        >

                                            <td className="px-8 py-5">

                                                <div className="font-semibold text-[#1E3A8A]">
                                                    {item.name}
                                                </div>

                                            </td>

                                            <td className="px-8 py-5 text-slate-600 leading-7">
                                                {item.composition}
                                            </td>

                                        </tr>

                                    ))}

                                </React.Fragment>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>
        </section>
    );
}