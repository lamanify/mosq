"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    // Default to the first item being open (index 0)
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                        ? "border-gold/50 bg-zinc-50"
                        : "border-zinc-200 hover:border-zinc-300"
                        }`}
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between group"
                        aria-expanded={openIndex === index}
                    >
                        <h3 className="text-lg font-bold text-grey-900 group-hover:text-gold transition-colors">
                            {item.question}
                        </h3>
                        <span
                            className={`ml-4 p-2 rounded-full border border-zinc-200 bg-zinc-50 transition-transform duration-300 ${openIndex === index
                                ? "rotate-180 text-gold border-gold/50"
                                : "text-grey-400 group-hover:text-grey-900"
                                }`}
                        >
                            <ChevronDown className="w-5 h-5" />
                        </span>
                    </button>
                    <div
                        className={`transition-all duration-300 ease-in-out ${openIndex === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="px-6 pb-6 text-grey-600 leading-relaxed font-sans">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
