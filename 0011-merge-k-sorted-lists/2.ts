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
    let valIndexes: number[] = [];
    let val: number | undefined = undefined;
    for (let i = 0; i < lists.length; i++) {
        const list = lists[i];
        if (list !== null) {
            if (val === undefined || list.val < val) {
                valIndexes = [i];
                val = list.val;
            } else if (list.val === val) {
                valIndexes.push(i);
            }
        }
    }
    if (val === undefined) {
        return null;
    } else {
        return fillSameValues(lists, val, valIndexes, 0);
    }
}

function fillSameValues(lists: Array<ListNode | null>, val: number, valIndexes: number[], i: number): ListNode | null {
    const valIndex = valIndexes[i];
    const node = lists[valIndex];
    if (!node) return mergeKLists(lists);
    lists[valIndex] = node.next;
    const next = i < valIndexes.length - 1 ? fillSameValues(lists, val, valIndexes, i + 1) : mergeKLists(lists);
    return new ListNode(val, next);
}
