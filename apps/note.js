export const name = "note";
export const description = "Quick personal notes";

let notes = [];

export function run(context, ...args) {
    const sub = args[0];
    if (sub === "new") {
        const note = args.slice(1).join(" ");
        notes.push(note);
        return `Note saved: "${note}"`;
    }
    if (sub === "list") {
        if (!notes.length) return "No notes available.";
        return notes.map((t, i) => `${i+1}. ${t}`).join("\n");
    }
    return "Usage: note new [desc] | note list";
}