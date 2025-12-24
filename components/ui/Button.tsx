import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "gold";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    variant?: "primary" | "secondary" | "gold";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    className?: string;
}

const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variantStyles = {
    primary:
        "bg-black text-white hover:bg-gray-800 focus-visible:ring-black",
    secondary:
        "bg-white text-black border border-gray-200 hover:bg-gray-50 focus-visible:ring-gray-400",
    gold: "bg-gold text-white hover:bg-gold-hover focus-visible:ring-gold",
};

const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
};

export function Button({
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export function LinkButton({
    href,
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...props
}: LinkButtonProps) {
    return (
        <Link
            href={href}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </Link>
    );
}
