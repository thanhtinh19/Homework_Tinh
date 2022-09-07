
//findIndex
function myFindIndex(myArray, elementToLookFor) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === elementToLookFor) return i + 1;
    }
    return -1;
}
// console.log(myFindIndex([1, 3, 2, 3, 3, 4, 4, 5], 6))
// console.log(myFindIndex([1, 3, 2, 3,2, 3, 4, 4, 5], 2))


//map
function myMap(myArray, callback) {
    let newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        let newArrayItem = callback(myArray[i], i, myArray);
        newArray.push(newArrayItem);
    }
    return newArray;
}

//console.log(myMap([1,2,3,4], (a,b) => a+b))




//reduce
function myReduce(myArray, callback, initialValue) {
    let i = 0;
    if (myArray.length < 2) {
        i = 1;
        initialValue = myArray[0];
    }
    for (; i < myArray.length; i++) {
        initialValue = callback(initialValue, myArray[i], i, myArray);
    }
    return initialValue;
}

//console.log(myReduce([1,1], (a, b) => { return a + b },2))



//every
function myEvery(myArray, callback) {
    for (let i = 0; i < myArray.length; i++) {
        if (callback(myArray[i], i, myArray) == false) {
            return false;
        }
    }
    return true;
}
//console.log(myEvery([1,2,3,4], x => x<5))



//sort

function mySort(myArray, callback) {
    let temp;
    for (let i = 0; i < myArray.length - 1; i++) {
        for (let j = i + 1; j < myArray.length; j++) {
            if (callback(myArray[j], myArray[i]) < 0) {
                temp = myArray[i];
                myArray[i] = myArray[j];
                myArray[j] = temp;
            }
        }
    }
    return myArray;
}
//console.log(mySort([1,2,10,5,4], (a,b) => a-b))




//flat
function myFlat(myArray, depth) {
    let result = [];
    for (let i = 0; i < myArray.length; i++) {
        let current = myArray[i];
        if (Array.isArray(current) && depth >= 0) {
            result.push.apply(myArray, myFlat(current));
            depth--;
        }
        else {
            result.push(current);
        }
    }
    return result;
}

console.log(myFlat([1, [2], [3, [[[4]]]], 3], 2))