test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    const isPalindrome = (str) => {
        const cleaned = str.replace(/\W/g, '').toLowerCase();
        const reversed = cleaned.split('').reverse().join('');
        return cleaned === reversed;
    };

    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('race a car')).toBe(false);
    expect(isPalindrome('')).toBe(true);
});