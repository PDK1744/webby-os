export const name = "date";
export const description = "Show current date and time";
export function run() {
    return new Date().toString();
}