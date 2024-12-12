arr = [1,2,3,4,5,6,2,3]
for(i=0; i<arr.length; i++){
    if(arr[i] == 2){
        continue;
    }
    console.log(arr[i])
}
let number = 287152; // Example number
let count = 0;

while (number > 0) {
    count++;
    number = Math.floor(number / 10);
}

console.log(count); // Output: 6
 // Example number
 let numbers = 287152;
let sum = 0;

while (numbers > 0) {
    let digit = numbers % 10; // Extract the last digit
    sum += digit; // Add it to the sum
    numbers = Math.floor(numbers / 10); // Remove the last digit
}

console.log(sum); 
let n = 7; // Example number
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i; // Multiply each number from 1 to n
}

console.log(factorial); // Output: 5040 for 7!
let arr = [12, 45, 7, 89, 34]; // Example array
let largest = arr[0]; // Assume the first element is the largest

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i]; // Update largest if current element is greater
    }
}

console.log(largest); // Output: 89