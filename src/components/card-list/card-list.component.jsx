import React, { Component } from 'react'
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {

    render() {
        let {cards} = this.props;

        return (
            <div className='card-list'>
                {cards.map((card) => 
                    <Card 
                        key={card.id} 
                        title={card.name}
                        imageSrc={card.imageSrc}
                        describe={card.describe}
                    />)}
            </div>  
        );
    }
}

export default CardList