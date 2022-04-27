import React, { Component } from 'react'
import './search-input.styles.css';

class SearchInput extends Component {
    
    render() {
        let {value, onChange} = this.props;

        return (
            <input 
                className={this.props.className}
                type='search'
                value={value}
                onChange={onChange}
            />
        );
    }
}

export default SearchInput