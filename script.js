const numbers = [];

for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}
console.log("Исходный массив:", numbers);

for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1);
    }
}
console.log("После удаления отрицательных:", numbers);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] ** 2;
}
console.log("После возведения в квадрат:", numbers);

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            const temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log("После сортировки по убыванию:", numbers);

console.log("Итоговый массив:", numbers);