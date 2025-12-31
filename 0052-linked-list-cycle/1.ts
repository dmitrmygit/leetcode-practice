export {};

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
    const previous = new Set<ListNode>();
    for (let node = head; node !== null; node = node.next) {
        if (previous.has(node)) {
            return true;
        }
        previous.add(node);
    }
    return false;
}
