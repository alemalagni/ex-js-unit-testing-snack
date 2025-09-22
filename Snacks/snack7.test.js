test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    const createSlug = (title) => {
        if (!title || typeof title !== 'string') {
            throw new Error('Titolo non valido');
        }
        return title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-');
    };

    expect(() => createSlug('')).toThrow('Titolo non valido');
    expect(() => createSlug(null)).toThrow('Titolo non valido');
    expect(() => createSlug(123)).toThrow('Titolo non valido');
});