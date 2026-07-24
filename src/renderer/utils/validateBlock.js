export function validateBlock(block) {
    if (!block) return false;
    if (!block.type) return false;
    if (typeof block.type !== "string") return false;

    return true;
}