export const name = "reload";
export const description = "Reload the command registry";

export async function run(print) {
    const { reloadCommands } = await import("../lib/commandRegistry.js");
    const commands = await reloadCommands();
    return `Reloaded ${commands.length} commands.`;
}