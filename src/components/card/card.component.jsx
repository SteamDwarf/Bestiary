import React, { Component } from 'react'
import './card.styles.css';

class Card extends Component {
    
    render() {
        let {title, imageSrc, describe} = this.props;

        return (
            <div className='card'>
                <img className='card_image' src={imageSrc} alt={`${title}`} />
                <h3 className='card_title'>{title}</h3>
                <p className='card_describe'>{describe}</p>
            </div>
        );
    }
}

export default Card