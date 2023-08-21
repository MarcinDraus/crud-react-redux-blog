//import parseDate from '../utils/parseDate';
//import dateToStr from '../utils/dateToStr';
const initialState = {

    posts: [
        {
        id: '1',
        title: 'Article title',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDateS: '02-02-2022',
        //publishedDate: parseDate('02-02-2022'),
        publishedDate: new Date('2022-02-02'),
        author: 'John Doe',
      },
      {
        id: '2',
        title: 'Article title 2',
        shortDescription: 'Short description of the article 2...',
        content: 'Main content of the article 2',
        publishedDateS: '15-03-2022',
        //publishedDate: dateToStr('2022-03-15'),
        publishedDate: new Date('2023-03-15'),
        author: 'Jane Smith'
      },
      {
        id: '3',
        title: 'Article title 3',
        shortDescription: 'Short description of the article 3...',
        content: 'Main content of the article 3',
        publishedDateS: '10-05-2022',
        //publishedDate: dateToStr('2022-05-10'),
        publishedDate: new Date('2024-05-10'),
        author: 'Emily Johnson'
      },
      
    ],
}
export default initialState;
