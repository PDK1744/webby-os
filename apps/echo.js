export const name = "echo";
export const description = "Echo the input text";
export function run(context, ...args) {
    return args.join(" ");
}