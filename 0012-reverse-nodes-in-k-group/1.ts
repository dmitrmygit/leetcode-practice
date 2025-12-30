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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const nodes: ListNode[] = [];
    let i = 0;
    let node = head;
    while (i < k) {
        if (node === null) return head;
        nodes.push(node);
        i++;
        node = node.next;
    }
    const next = nodes[nodes.length - 1].next;
    for (let j = nodes.length - 1; j > 0; j--) {
        nodes[j].next = nodes[j - 1];
    }
    nodes[0].next = reverseKGroup(next, k);
    return nodes[nodes.length - 1];
}
