import React from 'react';
import Cards from './Components/Cards';
import Header from './Components/Header';
import data from './DataBase/data.js';

export default function App() {
    const cards = data.map((ele) => {
        return <Cards data={ele} />
    })

    return (
        <div className="container">
            <Header />
            {cards}
        </div>
    )
}

