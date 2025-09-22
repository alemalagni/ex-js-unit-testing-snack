test('La funzione createSlug sostituisce gli spazi con -.', () => {
    const createSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-');
    };

    expect(createSlug('Hello World')).toBe('hello-world');
    expect(createSlug('JavaScript is Awesome!')).toBe('javascript-is-awesome!');
    expect(createSlug('   Leading Spaces')).toBe('leading-spaces');
});