import { loadCommands } from "./commandRegistry";

let registry = {};

export async function initRegistry() {
    registry = await loadCommands();
}

export async function handleCommand(input, context) {
    const [cmd, ...args] = input.trim().split(" ");
    const command = registry[cmd];

    if (!command) return `Command not found: ${cmd}. Try 'help' to see available commands.`;
    const result = await command.run(context, ...args);
    return result;
}