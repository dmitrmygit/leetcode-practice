export {};

class MinStack {

    private arr: number[] = [];
    private minArr: number[] = [];

    push(val: number): void {
        const min = this.minArr.length > 0 ? Math.min(this.minArr[this.minArr.length - 1], val) : val;
        this.arr.push(val);
        this.minArr.push(min);
    }

    pop(): void {
        this.arr.pop();
        this.minArr.pop();
    }

    top(): number | null {
        return this.arr.length > 0 ? this.arr[this.arr.length - 1] : null;
    }

    getMin(): number | null {
        return this.minArr.length > 0 ? this.minArr[this.minArr.length - 1] : null;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
