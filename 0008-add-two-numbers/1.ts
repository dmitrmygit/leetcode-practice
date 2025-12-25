// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return addTwoNumbersPrivate(l1, l2, false);
}

function addTwoNumbersPrivate(l1: ListNode | null, l2: ListNode | null, plusOne: boolean): ListNode | null {
    if (l1 === null && l2 === null && !plusOne) return null;
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + (plusOne ? 1 : 0);
    const newVal = sum % 10;
    const newPlusOne = sum >= 10;
    const newNext = addTwoNumbersPrivate(l1?.next ?? null, l2?.next ?? null, newPlusOne);
    return new ListNode(newVal, newNext);
}
