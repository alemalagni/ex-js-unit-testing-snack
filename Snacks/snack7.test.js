test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    const findPostById = (posts, id) => {
        return posts.find(post => post.id === id) || null;
    };

    const posts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' }
    ];

    expect(findPostById(posts, 2)).toEqual({ id: 2, title: 'Post 2' });
    expect(findPostById(posts, 4)).toBeNull();
});