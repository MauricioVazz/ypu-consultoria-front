export function validateBlock(block) {

    if (!block) return false;

    if (!block.type) return false;

    return true;

}