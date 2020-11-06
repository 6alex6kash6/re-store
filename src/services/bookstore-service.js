export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Production-ready Microservices',
        author: 'Susan J.Fawler'
      },
      {
        id: 2,
        title: 'Release it!',
        author: 'Michael T. Nygard'
      }
    ];
  }
}