import { notFound } from "next/navigation";

import { DIVISIONS } from "@/lib/site-data";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import DivisionHero from "@/components/divisions/division-hero";
import ProductCarousel from "@/components/divisions/product-carousel";
import ProductTable from "@/components/divisions/product-table";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function DivisionDetailsPage({ params }: Props) {
    const { id } = await params;

    const division = DIVISIONS.find(
        (item) => item.id === Number(id)
    );

    if (!division) {
        notFound();
    }

    return (
        <>
            <SiteHeader />

            <main className="bg-white">
                <DivisionHero
                    name={division.name}
                    description={division.description}
                    bannerImage={division.bannerImage}
                    heroImage={division.heroImage}
                />

                <ProductCarousel
                    products={division.products}
                />

                <ProductTable
                    products={division.products}
                />

            </main>

            <SiteFooter />
        </>
    );
}