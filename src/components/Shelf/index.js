import React from 'react';
import Book from '../Book';
import './style.css';

class Shelf extends React.Component {
    render() {
        const { bookList, title, handleShelfChange } = this.props;
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {bookList.map((item, i) => <li key={title+'_'+i}>
                        <Book item={item} handleShelfChange={handleShelfChange} />
                      </li>)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;