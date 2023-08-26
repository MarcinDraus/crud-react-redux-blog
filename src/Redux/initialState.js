
const initialState = {

    posts: [
        {
        id: '1',
        title: 'Article title',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        categoryId: 'Sport',
        publishedDate: new Date('2022-02-02'),
        author: 'John Doe',
      },
      {
        id: '2',
        title: 'Article title 2',
        shortDescription: 'Short description of the article 2...',
        content: 'Main content of the article 2',
        categoryId: 'News',
        publishedDate: new Date('2023-03-15'),
        author: 'Jane Smith'
      },
      {
        id: '3',
        title: 'Article title 3',
        shortDescription: 'Short description of the article 3...',
        content: 'Main content of the article 3',
        categoryId: 'Movie',
        publishedDate: new Date('2024-05-10'),
        author: 'Emily Johnson'
      },
    ],
    categories: [
      { id: 1, name: 'Sport' },
      { id: 2, name: 'News' },
      { id: 3, name: 'Movie' },
    ],
}
export default initialState;
