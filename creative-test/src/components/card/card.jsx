import React from 'react';
import './card.scss';

const Card = ({card, onDelete = ()=>{}}) => {
    return (
        <div className='card-component'>
            <div className='img-eat'>
                <img src={require('../../assets/img/img-eat.png')} alt="" />
            </div>
            <div className="header-card" onClick={onDelete}>
                <img className='icon-delete' src={require("../../assets/img/icon-delete.png")} alt="" />
            </div>
            <div className="body-card">
                <div className="title-card">
                    {card?.title}
                </div>
                <div className='text-card'>
                    {card?.body}
                </div>
            </div>
        </div>
    );
}

export default Card;
