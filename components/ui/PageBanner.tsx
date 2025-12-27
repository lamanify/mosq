import React from "react";

interface PageBannerProps {
    tag: string;
    title: string;
    description: string;
    align?: "center" | "left";
    className?: string;
}

export const PageBanner = ({
    tag,
    title,
    description,
    align = "center",
    className = "",
}: PageBannerProps) => {
    return (
        <section className={`relative pt-40 pb-20 px-4 overflow-hidden ${className}`}>
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gold/10 rounded-[100%] blur-[100px] pointer-events-none z-0" />

            <div className={`relative z-10 max-w-4xl mx-auto ${align === "center" ? "text-center" : "text-left"}`}>
                {/* Tag */}
                <div className={`reveal-on-load stagger-1 mb-6 flex ${align === "center" ? "justify-center" : "justify-start"}`}>
                    <span className="text-gold text-sm font-bold tracking-widest uppercase font-mono">
                        {tag}
                    </span>
                </div>

                {/* Title */}
                <h1 className="reveal-on-load stagger-2 text-5xl md:text-7xl font-bold text-grey-900 mb-6 tracking-tight leading-tight">
                    {title}
                </h1>

                {/* Description */}
                <p className="reveal-on-load stagger-3 text-xl md:text-2xl text-grey-600 max-w-2xl mx-auto font-sans font-light leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
};
