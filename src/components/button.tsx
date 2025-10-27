import React, { ComponentProps } from "react";
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
    base: "bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700",

    variants: {
        variant: {
            primary: "bg-lime-300 text-lime-900 hover:bg-lime-400",
            secondary: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
        },
        size: {
            default: "py-2",
            size: 'w-full h-11'
        },
    },


    defaultVariants: {
        variant: 'secondary',
        size: 'default'
    }
});

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: React.ReactNode
}
export function Button({ children, variant, size, ...props }: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({ variant })}>
            {children}
        </button>
    )
}