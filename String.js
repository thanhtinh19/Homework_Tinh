
//đếm số từ có trong câu
function countWords(str) {
    str = str.trim().split(" ");
    let result = str.reduce((a, b) => {
        if (b != '') {
            a++;
        }
        return a;
    }, 0)
    return result;
}

console.log(countWords("     aaa   bbbbb   ccccc"))

//Thống kê số lượng từ trong câu
function statisticsWords(str) {
    str = str.trim().split(" ");
    console.log(str)
    let result = str.reduce((a, b) => {
        if (b != '') {
            a[b] = a[b] + 1 || 1; 
        }
        return a;
    }, {})
    return result;
}

console.log(statisticsWords("  easy      frontend easy"));




//Thống kê ký tự có trong câu
function statisticsCharacters(str){
    str = str.split("");
    let result = str.reduce((a,b) => {
            a[b] = a[b] + 1 || 1;
        return a;
    }, {});
    return result;
} 

console.log(statisticsCharacters("  aa b   ccc"))