import * as allApps from "../apps/index.js";

let commandRegistry = {};

export async function loadCommands() {
    // const modules = import.meta.glob("../apps/*.js");
    commandRegistry = {};
    for (const path in allApps) {
        const mod = await allApps[path];
        if (mod.name && typeof mod.run === "function") {
            commandRegistry[mod.name] = {
                description: mod.description || "No description",
                run: mod.run,
            }
        }
    }
    return commandRegistry;
}

export function getCommand(name) {
    return commandRegistry[name];
}

export async function reloadCommands() {
    await loadCommands();
    return Object.keys(commandRegistry);
}