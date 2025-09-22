test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    function average(numbers) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
    }

    expect(average([10, 20, 30])).toBe(20);
    expect(average([5, 15, 25, 35])).toBe(20);
    expect(average([1, 2, 3, 4, 5])).toBe(3);
});