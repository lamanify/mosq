import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    helperText?: string;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
    helperText?: string;
}

const inputBaseStyles =
    "w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors";

const errorStyles = "border-red-500 focus:border-red-500 focus:ring-red-500";

export function FormInput({
    label,
    error,
    helperText,
    id,
    required,
    className = "",
    ...props
}: FormInputProps) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="space-y-1.5">
            <label
                htmlFor={inputId}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
                {required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
            <input
                id={inputId}
                className={`${inputBaseStyles} ${error ? errorStyles : ""} ${className}`}
                aria-invalid={error ? "true" : undefined}
                aria-describedby={error ? `${inputId}-error` : undefined}
                required={required}
                {...props}
            />
            {error && (
                <p id={`${inputId}-error`} className="text-sm text-red-500">
                    {error}
                </p>
            )}
            {helperText && !error && (
                <p className="text-xs text-gray-500">{helperText}</p>
            )}
        </div>
    );
}

export function TextArea({
    label,
    error,
    helperText,
    id,
    required,
    className = "",
    rows = 4,
    ...props
}: TextAreaProps) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="space-y-1.5">
            <label
                htmlFor={inputId}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
                {required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
            <textarea
                id={inputId}
                rows={rows}
                className={`${inputBaseStyles} ${error ? errorStyles : ""} ${className}`}
                aria-invalid={error ? "true" : undefined}
                aria-describedby={error ? `${inputId}-error` : undefined}
                required={required}
                {...props}
            />
            {error && (
                <p id={`${inputId}-error`} className="text-sm text-red-500">
                    {error}
                </p>
            )}
            {helperText && !error && (
                <p className="text-xs text-gray-500">{helperText}</p>
            )}
        </div>
    );
}
