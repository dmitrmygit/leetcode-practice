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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    const arr: ListNode[] = [];
    for (let node = head; node !== null; node = node.next) {
        arr.push(node);
    }
    const halfLength = Math.ceil(arr.length / 2);
    const arrLastIndex = arr.length - 1;
    let previous: ListNode | null = null;
    for (let i = 0; i < halfLength; i++) {
        if (previous !== null) {
            previous.next = arr[i];
        }
        previous = arr[i];
        const j = arrLastIndex - i;
        if (i !== j) {
            previous.next = arr[j];
            previous = arr[j];
        }
        previous.next = null;
    }
}
