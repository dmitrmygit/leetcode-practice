export {};

function sortedSquares(nums: number[]): number[] {
    const res: number[] = Array.from({length: nums.length});
    let left = 0;
    let right = nums.length - 1;
    let resI = nums.length - 1;
    while (true) {
        const leftV = nums[left] < 0 ? nums[left] : null;
        const rightV = nums[right] >= 0 ? nums[right] : null;
        if (leftV !== null && rightV !== null) {
            if (Math.abs(leftV) > Math.abs(rightV)) {
                res[resI] = Math.pow(leftV, 2);
                left++;
            } else {
                res[resI] = Math.pow(rightV, 2);
                right--;
            }
        } else if (leftV !== null) {
            res[resI] = Math.pow(leftV, 2);
            left++;
        } else if (rightV !== null) {
            res[resI] = Math.pow(rightV, 2);
            right--;
        } else {
            break;
        }
        resI--;
    }
    return res;
}
