import React from 'react';
import Card from './Card'

const CardList = ({kittens}) => {
    return (
        <div className='cardList'>
            {
                kittens.map((user, i) => {
                    return ( 
                        <Card 
                        key={i} 
                        id={kittens[i].id} 
                        name={kittens[i].name} 
                        phone={kittens[i].phone}
                        email={kittens[i].email}
                        />
                        );
                })
            }
        </div>
    );
}

export default CardList;
