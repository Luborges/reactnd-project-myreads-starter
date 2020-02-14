import React from 'react';
import Select from '../Select';
import './style.css';

class Book extends React.Component {
    render() {
        const { title, authors, imageLinks, id, shelf } = this.props.item;
        const { handleShelfChange } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover background-cover" style={{ backgroundImage: `URL(${imageLinks ? imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/5/53/Books-aj.svg_aj_ashton_01c.png'})` }}></div>
                    <div className="book-shelf-changer">
                        <Select handleShelfChange={handleShelfChange} id={id} shelf={shelf} />
                    </div>
                </div>
                <div className="book-title">{title}</div>
                {authors && authors.map((item, i) => <div key={id+'_author_'+i} className="book-authors">{item}</div>)}
            </div>
        )
    }
}

export default Book;