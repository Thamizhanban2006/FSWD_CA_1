import React from 'react';

const ServiceCard = ({data}) => {
    return (
        <div className='card'>
        <h4>{data.Title}</h4>
        <p>{data.description}</p>
        </div>
    );
}

export default ServiceCard;
