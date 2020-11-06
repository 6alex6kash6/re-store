import React from 'react';
import BookList from "../book-list";

const HomePage = () => {
  const mock = [
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
  ]
  return (
    <div>
      <BookList books={mock}/>
    </div>
  )
}
export default HomePage