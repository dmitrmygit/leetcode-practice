export {};

function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];
    for (const asteroid of asteroids) {
        if (stack.length === 0 || asteroid > 0) {
            stack.push(asteroid);
            continue;
        }
        let addAsteroid = false;
        while (stack.length > 0) {
            const lastStack = stack[stack.length - 1];
            if (lastStack > 0) {
                const lastStackAbs = Math.abs(lastStack);
                const asteroidAbs = Math.abs(asteroid);
                if (lastStackAbs < asteroidAbs) {
                    stack.pop();
                    if (stack.length === 0) {
                        addAsteroid = true;
                    }
                } else if (lastStackAbs === asteroidAbs) {
                    stack.pop();
                    break;
                } else {
                    break;
                }
            } else {
                addAsteroid = true;
                break;
            }
        }
        if (addAsteroid) {
            stack.push(asteroid);
        }
    }
    return stack;
}
