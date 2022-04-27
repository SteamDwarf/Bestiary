import React, { Component } from 'react'
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {

    render() {
        let {cards} = this.props;

        return (
            <div className='card-list'>
                {cards.map((beast) => 
                    <Card 
                        key={beast.id} 
                        title={beast.name}
                        imageSrc={beast.imageSrc}
                    />)}
            </div>  
        );
    }
}

export default CardList