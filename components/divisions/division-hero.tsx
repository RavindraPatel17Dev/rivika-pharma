type Props = {
    name: string;
    description: string;
    bannerImage: string;
    heroImage: string;
};

export default function DivisionHero({
    name,
    description,
    bannerImage,
    heroImage,
}: Props) {
    return (
        <>
            {/* ================= Banner ================= */}

            <section
                className="relative mt-20 h-[300px] overflow-hidden md:mt-24 md:h-[420px]"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/70 via-[#2563EB]/45 to-transparent" />

                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
                    <div className="max-w-3xl">

                        <span className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1E3A8A] shadow-lg">
                            Therapeutic Division
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                            {name}
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
                            {description}
                        </p>

                    </div>
                </div>
            </section>

            {/* ================= About Division ================= */}

            <section className="bg-[#F5F9FF] py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                    {/* LEFT */}

                    <div>

                        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
                            Trusted Medicines • Healthier Lives
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-[#1E3A8A]">
                            {name}
                        </h2>

                        <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#F97316]" />

                        <p className="mt-8 text-lg leading-8 text-slate-600">
                            {description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <div className="rounded-2xl border border-blue-100 bg-white px-6 py-4 shadow-md">
                                <p className="text-3xl font-bold text-[#1E3A8A]">
                                    25+
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                    Premium Products
                                </p>
                            </div>

                            <div className="rounded-2xl border border-blue-100 bg-white px-6 py-4 shadow-md">
                                <p className="text-3xl font-bold text-[#F97316]">
                                    WHO
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                    GMP Standards
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="relative">

                        <div className="absolute -inset-3 rounded-[30px] bg-blue-100 blur-xl opacity-70" />

                        <img
                            src={heroImage}
                            alt={name}
                            className="relative w-full rounded-3xl border border-white bg-white object-cover shadow-xl"
                        />

                    </div>

                </div>
            </section>
        </>
    );
}