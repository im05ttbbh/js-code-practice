function main(input) {
    let nums = input.split("\n")[1].split(" ").map((n) => parseInt(n, 10));
    let cnt = 0;
    console.log(nums);

    while(nums.every((n) => (n % 2) === 0)) {
        cnt++;
        nums = nums.map((n) => n / 2);
        console.log(nums);
        
    }
    console.log(cnt);
}

main(require("fs").readFileSync("test.txt", "utf8"));

// ・numsを取得
// ・numsをループさせ偶数チェック、条件を満たせばcnt += 1、満たさなければbreak