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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let valIndex: number | null = null;
    let val: number | undefined = undefined;
    for (let i = 0; i < lists.length; i++) {
        const list = lists[i];
        if (list !== null && (val === undefined || list.val < val)) {
            valIndex = i;
            val = list.val;
        }
    }
    if (valIndex === null) {
        return null;
    } else {
        lists[valIndex] = lists[valIndex]!.next;
        const next = mergeKLists(lists);
        return new ListNode(val, next);
    }
}
