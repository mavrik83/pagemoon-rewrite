import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values into a single string.
 *
 * @param inputs - The class values to be combined.
 * @returns The combined class string.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Concatenates the template strings and expressions into a single string.
 *
 * @param strings - The template strings.
 * @param expressions - The expressions to be interpolated into the template.
 * @returns The concatenated string.
 */
export const t = (
    strings: TemplateStringsArray,
    ...expressions: any[]
): string => {
    let result = '';
    strings.forEach((str, i) => {
        result += `${str}${expressions[i] ?? ''}`;
    });
    return result;
};

export const classNames = (...classes: string[]) =>
    classes.filter(Boolean).join(' ');
