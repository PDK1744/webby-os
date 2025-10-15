import { loadCommands } from "@/lib/commandRegistry";

export const name = "help";
export const description = "List all available commands";
export async function run() {
    const commands = await loadCommands();
    return Object.entries(commands)
    .map(([name, c]) => `${name.padEnd(10)} - ${c.description}`)
    .join("\n");
}