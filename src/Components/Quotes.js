import React, { useState } from 'react';
import './styles.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getRandomQuote = () => {
    const quotes = [
      {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
      },
      {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
      },
      {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss"
      },
      {
        quote: "There is no great genius without some touch of madness.",
        author: "Seneca the Younger"
      },
      {
        quote:"What the caterpillar calls the end of the world, the master calls a butterfly.", 
        author: "Richard Bach"
      },
      {
        quote: "When the solution is simple, God is answering.",
        author: "Albert Einstein"
      }
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

  return (
    <div className="quote-container">
      <p className="quote-text">{quote}</p>
      <p className="quote-author">{author}</p>
      <button className="next-button" onClick={getRandomQuote}>Generate Random Quote</button>
    </div>
  );
};

export default Quote;
