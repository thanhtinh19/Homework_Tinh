
//kiểm tra mảng tăng dần
function isIncreasingNumberList(numberList){
    for(let i = 0; i < numberList.length-1; i++){
        if(numberList[i] >= numberList[i+1]) return false;
    }
    return true;
}
//console.log(isIncreasingNumberList([1,1]))


//Kiểm tra mảng đối xứng
function isSymmetricList(numberList){
    if(numberList.length === 1) return false;
    const reverted = [...numberList].reverse();
    for(let i = 0; i < numberList.length; i++){
        if(numberList[i] !== reverted[i]) return false;
    }
    return true;
}
//console.log(isSymmetricList([1, 2, 3, 2, 1]))


//Kiểm tra mảng có số fibonacci nhỏ hơn 100
function fibonacci(n){
    if (n == 0 || n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2)
}

function generateFiboList() {
    let n = 1;
    let arr = [];
    while (fibonacci(n) < 100) {
        arr.push(fibonacci(n));
        n++;
    }
    return arr;
}

function hasFibonacciNumber(numberList){
    let arr = generateFiboList();
    return numberList.some(element => arr.includes(element));
}

// console.log(hasFibonacciNumber([4,6,7]))
// console.log(hasFibonacciNumber([0,1,2,3,4,5]))
// console.log(hasFibonacciNumber([89]))


//Tìm số lớn thứ hai trong mảng
function findSecondLargestNumber(numberList){
    numberList.sort((a,b) => a - b);
    return numberList[numberList.length-2]
}

function findSecondLargestNumber2(numberList){
    let max = 0;
    let max2 = 0;
    for(let i = 0; i < numberList.length; i++){
        if(numberList[i] < 0) return null;
        if (numberList[i] > max) {
            max2 = max;
            max = numberList[i];
        } else if (numberList[i] > max2 && numberList[i] < max) {
            max2 = numberList[i];
        }
    }
    return max2;
}


console.log(findSecondLargestNumber2([1,2,3,4,4]))


//Tìm số chính phương cuối cùng trong mảng
function isPerfectSquare(n) {
    if (n < 0) return false;
    return Math.sqrt(n) % 1 == 0 ? true : false;
}
function findLastPerfectSquare(numberList){
    let result = 0;
    for (let i of numberList) {
        if (isPerfectSquare(i)) {
            result = i;
        }
    }
    if (result !== 0) {
        return result;
    }
}

//console.log(findLastPerfectSquare([4,16,25,36,40]))


//Đếm số lượng các số có trong mảng a mà không có trong mảng b
function countNumbersNotInB(a,b){
    let count = 0;
    a.forEach(element => {
        if(!b.includes(element)) count++;
    });
    return count;
}

//console.log(countNumbersNotInB([1,2,3],[3,4,5]))