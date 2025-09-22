test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    const getInitials = (fullName) => {
        return fullName
            .split(' ')
            .map(name => name.charAt(0).toUpperCase())
            .join('');
    };

    expect(getInitials('Mario Rossi')).toBe('MR');
    expect(getInitials('Luigi Bianchi')).toBe('LB');
    expect(getInitials('Anna Maria Verdi')).toBe('AMV');
});