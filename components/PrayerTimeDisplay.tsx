"use client";

import { useEffect, useState } from "react";

interface PrayerTimeDisplayProps {
    prayerMapping: { name: string; time: string }[];
    hijriDate: string;
    gregorianDate: string;
}

export default function PrayerTimeDisplay({
    prayerMapping,
    hijriDate,
    gregorianDate,
}: PrayerTimeDisplayProps) {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateActiveIndex = () => {
            // Get current time in Malaysia/Kuala Lumpur timezone
            const now = new Date();
            const mytString = now.toLocaleTimeString("en-US", {
                timeZone: "Asia/Kuala_Lumpur",
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
            });

            // Find the index where current time is less than prayer time
            let index = prayerMapping.findIndex((p) => mytString < p.time);

            // If index is -1, it means current time is after Isyak (or the last prayer), so next is Subuh (index 0) of next day
            // Or if we interpret "active" as "current ongoing prayer time window", logic might differ.
            // The original request implies "upcoming prayer time" or "current" context.
            // Based on original code: `currentTimeStr < p.time` implies we look for the *next* prayer.
            // If `index` is found, that's the next prayer.
            // If `index` is -1, the next prayer is Subuh (0).

            if (index === -1) index = 0;
            setActiveIndex(index);
        };

        updateActiveIndex();
        // Update every minute to keep it fresh
        const interval = setInterval(updateActiveIndex, 60000);

        return () => clearInterval(interval);
    }, [prayerMapping]);

    // Prevent hydration mismatch by rendering a consistent state initially or null
    // We'll render the static layout but without highlighting if not mounted, or just default to 0/server guess if we wanted.
    // Ideally, we wait for mount to apply specific "active" styles to avoid flash, but a small flash is better than mismatch.
    // To avoid layout shift, we just render normally. The active highlight comes in after mount.

    return (
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:p-12 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-100 pb-8">
                <div>
                    <span className="text-green-600 text-sm font-bold tracking-widest uppercase mb-2 block">
                        Waktu Solat Semasa
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900">
                        Shah Alam, Selangor
                    </h2>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                    <p className="text-sm text-gray-400">{gregorianDate}</p>
                    <p className="text-lg font-mono font-medium text-slate-600">
                        {hijriDate}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {prayerMapping.map((item, idx) => {
                    // Only show active state if mounted and index matches
                    const isActive = mounted && idx === activeIndex;

                    return (
                        <div
                            key={idx}
                            className={`text-center p-6 rounded-2xl transition-all ${isActive
                                    ? "bg-green-600 text-white shadow-lg shadow-green-600/30 scale-105 ring-4 ring-green-600/20"
                                    : "bg-gray-50 text-slate-600 hover:bg-gray-100"
                                }`}
                        >
                            <p
                                className={`text-xs font-bold uppercase tracking-widest mb-2 ${isActive ? "text-green-100" : "text-gray-400"
                                    }`}
                            >
                                {item.name}
                            </p>
                            <p
                                className={`text-2xl font-mono font-bold leading-none ${isActive ? "text-white" : "text-slate-900"
                                    }`}
                            >
                                {item.time}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
