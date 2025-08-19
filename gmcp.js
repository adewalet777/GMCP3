//Reverse String
function reverseString(str) {
    return str.split('').reverse().join('');
}

//Count Counters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//Finding Min and Max
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}


//sum of arrays
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


//filter arrays
function filterArray(arr, condition) {
    return arr.filter(condition);
}


//Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}


//prime number check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//finonacci sequence
function fibonacciSequence(terms) {
    let sequence = [0, 1];
    while (sequence.length < terms) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence.slice(0, terms);
}


console.log(reverseString("")); 
console.log(countCharacters(""));
console.log(capitalizeWords("")); 

console.log(findMax([, , ])); 
console.log(findMin([, , ]));
console.log(sumArray([, , ])); 
console.log(filterArray([, , ], x => x > i)); 

console.log(factorial()); 
console.log(isPrime()); 
console.log(fibonacciSequence());