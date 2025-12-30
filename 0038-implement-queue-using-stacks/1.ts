export {};

class MyQueue {
    private inputStack: number[] = [];
    private outputStack: number[] = [];

    push(x: number): void {
        let v = this.outputStack.pop();
        while (v) {
            this.inputStack.push(v);
            v = this.outputStack.pop();
        }
        this.inputStack.push(x);
    }

    pop(): number | undefined {
        let v = this.inputStack.pop();
        while (v) {
            this.outputStack.push(v);
            v = this.inputStack.pop();
        }
        return this.outputStack.pop();
    }

    peek(): number {
        let v = this.inputStack.pop();
        while (v) {
            this.outputStack.push(v);
            v = this.inputStack.pop();
        }
        return this.outputStack[this.outputStack.length - 1];
    }

    empty(): boolean {
        return this.inputStack.length === 0 && this.outputStack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
