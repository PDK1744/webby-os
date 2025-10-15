export const name = "task";
export const description = "Manage tasks list";

let tasks = [];

export function run(context, ...args) {
    const sub = args[0];
    if (sub === "add") {
        const task = args.slice(1).join(" ");
        tasks.push(task);
        return `Added task: "${task}"`;
    }
    if (sub === "list") {
        if (!tasks.length) return "No tasks available.";
        return tasks.map((t, i) => `${i+1}. ${t}`).join("\n");
    }
    return "Usage: task add [desc] | task list";
}