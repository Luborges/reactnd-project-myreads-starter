import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Book from '../../components/Book';

class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      searchText: '',
      booksFinded: [],
      booksOnShelf: [],
    }
    this.updateValue = this.updateValue.bind(this);
    this.findBook = this.findBook.bind(this);
    this.handleShelfChange = this.handleShelfChange.bind(this);
  }

  componentDidMount = async () => {
    const all = await BooksAPI.getAll();
    this.setState({
      booksOnShelf: all,
    });
  }

  updateValue(searchText) {
    const { findBook } = this;
    this.setState({
      searchText,
    }, () => {
      findBook(searchText);
    });
  }

  findBook = async (searchText) => {
    let booksFinded = [];
    if (searchText && searchText!==''){
      booksFinded = await BooksAPI.search(searchText);
      if (booksFinded.length && booksFinded.length>0){
        const { booksOnShelf } = this.state;
        

        for (let x=0;x<booksFinded.length;x++){
          for (let y=0;y<booksOnShelf.length;y++){
            if (booksFinded[x].id === booksOnShelf[y].id){
              booksFinded[x].shelf = booksOnShelf[y].shelf;
              break;
            }
            else{
              booksFinded[x].shelf = 'none';
            }
          }
        }
      }
      else{
        booksFinded = [];
      }
    }
   
    this.setState({
      booksFinded,
    });
  }

  handleShelfChange = async (newShelf, id) => {
    try{
        await BooksAPI.update({id}, newShelf);
        this.setState((prevState) => ({
          booksFinded: prevState.booksFinded.map((item) => {
                if (item.id === id) {
                    item.shelf = newShelf;
                }
                return item;
            }),
          booksOnShelf: prevState.booksOnShelf.map((item) => {
              if (item.id === id) {
                  item.shelf = newShelf;
              }
              return item;
          }),
        }));
    }
    catch(error){
        console.log(error);
    }
  }

  render() {
    const { searchText, booksFinded } = this.state;
    const { updateValue, handleShelfChange } = this;
      return (
        <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search" to={'/'}>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" 
              value={searchText} onChange={evt => updateValue(evt.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchText && booksFinded.map((item, i) => <li key={'book_'+i}>
              <Book item={item} handleShelfChange={handleShelfChange} />
            </li>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;