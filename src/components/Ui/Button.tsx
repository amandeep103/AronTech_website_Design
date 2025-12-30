import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
};

export default function Button({
    children,
    onClick,
    href,
    className = "",
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ease-out focus:outline-none";

    if (href) {
        return (
            <a href={href} className={`${baseStyles} ${className}`}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${className}`}>
            {children}
        </button>
    );
}
