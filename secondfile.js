// Function 1: Welcome message
export function welcome(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to Georgian College`);
}

// Function 2: Convert Celsius to Fahrenheit
export function convertTemperature(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return `Celsius to Fahrenheit: ${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

// Function 3: Factorial calculation
export function MathOperation(value) {
    let factorial = 1;
    for (let i = 1; i <= value; i++) {
        factorial *= i;
    }
    return `Factorial of ${value} is ${factorial}`;
}

// Function 4
export function advancedFunction() {
    const arr = [4, 6, 8, 3, 7];
    const sortedArray = arr.sort((a, b) => a - b);
    console.log(`Sorted Array: ${sortedArray}`);

}