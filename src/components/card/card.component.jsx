import React, { Component } from 'react'

class Card extends Component {
    
    render() {
        let {title, imageSrc} = this.props;
        console.log(imageSrc);
        return (
            <div>
                <h1>{title}</h1>
                <img src={"https://robohash.org/55"} alt={`${title}`} />
            </div>
        );
    }
}

export default Card