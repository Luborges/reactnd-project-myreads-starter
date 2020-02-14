import React from 'react'
import './style.css'

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(selectedValue) {
        const { id, handleShelfChange } = this.props;
        handleShelfChange( selectedValue, id );
    }

    render() {
        const { shelf } = this.props;
        const { handleSelectChange } = this;

        return (
            <select value={shelf} onChange={evt => handleSelectChange(evt.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default Select;