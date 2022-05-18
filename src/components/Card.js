import React from 'react';

const Card = ({ name, phone, email, id }) => {
    return (
        <div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='kittens' src={`http://placekitten.com/200/300?image=${id}`}/>
         <div>
                <h2>{name}</h2>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;