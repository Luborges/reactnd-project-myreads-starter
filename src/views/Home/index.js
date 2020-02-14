import React from 'react';
import './style.css';
import Shelf from '../../components/Shelf';
import * as BooksAPI from '../../BooksAPI';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [],
        }
    
        this.handleShelfChange = this.handleShelfChange.bind(this);
    }
    
    componentDidMount = async () => {
        const all = await BooksAPI.getAll();
        this.setState({
            bookList: all,
        });
    }
    
    handleShelfChange = async (newShelf, id) => {
        try{
            await BooksAPI.update({id}, newShelf);
            this.setState((prevState) => ({
                bookList: prevState.bookList.map((item) => {
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
        const { bookList } = this.state;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf bookList={bookList.filter((item) => { return item.shelf === 'currentlyReading' })} title={'Currently Reading'} shelf={'currentlyReading'} 
                        handleShelfChange={this.handleShelfChange} />
                        <Shelf bookList={bookList.filter((item) => { return item.shelf === 'wantToRead' })} title={'Want to Read'} shelf={'wantToRead'} 
                        handleShelfChange={this.handleShelfChange} />
                        <Shelf bookList={bookList.filter((item) => { return item.shelf === 'read' })} title={'Read'} shelf={'read'} 
                        handleShelfChange={this.handleShelfChange} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to={'/search'}>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Home;