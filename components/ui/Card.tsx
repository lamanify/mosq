import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

interface CardWithIconProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
}

export function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`bg-white border border-gray-100 rounded-xl p-6 ${className}`}
        >
            {children}
        </div>
    );
}

export function CardWithIcon({
    icon,
    title,
    description,
    className = "",
}: CardWithIconProps) {
    return (
        <div
            className={`bg-white border border-gray-100 rounded-xl p-6 ${className}`}
        >
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gold">
                    {icon}
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
}

export function InfoCard({
    label,
    value,
    icon,
}: {
    label: string;
    value: string;
    icon?: ReactNode;
}) {
    return (
        <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-3">
                {icon && <span className="text-gold">{icon}</span>}
                <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-gray-900">{value}</p>
                </div>
            </div>
        </div>
    );
}
