export const name = "clear";
export const description = "Clear the screen";
export function run(context) {
    context.clearOutput();
    return null;
}