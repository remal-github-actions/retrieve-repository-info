export function snakeCaseToCamelCase(str: string): string {
    return str.replace(/_([a-z])/g, $1 => $1.toUpperCase())
        .replace(/_+/g, '')
}
