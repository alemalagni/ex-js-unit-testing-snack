test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    const createSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
    };

    expect(createSlug('Hello World')).toBe('hello world');
    expect(createSlug('JavaScript is Awesome!')).toBe('javascript is awesome!');
    expect(createSlug('   Leading Spaces')).toBe('leading spaces');
});