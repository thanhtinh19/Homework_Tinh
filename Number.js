
//Kiểm tra số tăng dần
function isIncreasingNumber(n) {
    let unit = n % 10;
    n = n / 10;
    while (n >= 10) {
        if (unit < n%10) return false;
    }
    return true;
}
console.log(isIncreasingNumber(1234))



//Kiểm tra số tăng dần đều theo khoảng cách cho trước
function isIncreasingNumber(n,x) {
    let str = n.toString();
    for(let i = 0; i < str.length-1; i++){
        if(str[i+1] - str[i] != x) return false;
    }
    return true;
}
console.log(isIncreasingNumber(123,1))


//Kiểm tra snt
function isPrime(n){
    s = Math.sqrt(n);
    for (let i = 2; i <= s; i++)
        if (n%i == 0) return false;
    return n > 1;
}
console.log(isPrime(4))
console.log(isPrime(3))


//kiểm tra số chính phương
function isPerfectSquare(n) {
    if (n < 0) return false;
    return Math.sqrt(n) % 1 == 0 ? true : false;
}

console.log(isPerfectSquare(144))
console.log(isPerfectSquare(5))
console.log(isPerfectSquare(36))



//kiểm tra số hoàn hảo
function isPerfectNumber(n){
    let sum = 0;
    for(let i = 1; i < n; i++){
        if(n%i == 0) sum += i;
    }
    return sum == n ? true : false;
}

console.log(isPerfectNumber(5))


//kiểm tra số đối xứng
function isSymetricNumber(n){
    n = n.toString();
    let a = Number(n.split("").reverse().join(""));
    if(n == a) return true;
    return false;
}

console.log(isSymetricNumber(1321))


//kiểm tra số có tổng chữ số chia hết cho 10
function isDivisibleBy10(n){
    n = n.toString();
    let a = n.split("");
    const sum = a.reduce((pre, cur) => {
        pre = Number(pre);
        cur = Number(cur)
        return pre + cur;
    });
    return sum % 10 == 0 ? true : false;
}

console.log(isDivisibleBy10(12345))