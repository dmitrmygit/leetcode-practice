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

function reverseList(head: ListNode | null): ListNode | null {
    let previous: ListNode | null = null;
    let newHead: ListNode | null = head;
    while (newHead !== null) {
        const temp = newHead.next;
        newHead.next = previous;
        previous = newHead;
        if (temp === null) {
            return newHead;
        }
        newHead = temp;
    }
    return null;
}
