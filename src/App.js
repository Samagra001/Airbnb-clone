import React from 'react';
import Navbar from './components/Navbar'; 
// import './App.css';  
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/Data';


// - img ("katie-zaferes.png")
// - rating ("5.0")
// - reviewCount (6)
// - country (Whatever you want)
// - title ("Life Lessons with Katie Zaferes")
// - price (136)


function App() {
      const cards = Data.map((card)=>{
         return <Card
         item={card} 
            // key={card.id}
            // img={card.coverImg}
            // rating={card.stats.rating}
            // reviewCount={card.stats.reviewCount}
            // country={card.location}
            // title={card.title}
            // price={card.price}
            // openSlots={card.openSpots}
         />
      });

  return (
    <div className="App">
     
        <Navbar />
        <Hero />
        <section className='card-list'>
           {cards}
        </section>
       
    </div>
  );
}

export default App;
