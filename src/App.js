import React, { useState, useEffect } from 'react';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    // Burada bir API'den rastgele alıntı alabilirsin
    try {
      const response = await fetch('https://api.example.com/quotes/random');
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error('Quote fetching error:', error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleTweet = () => {
    // Tweet atma işlemini burada gerçekleştirebilirsin
    // Örneğin: window.open(`https://twitter.com/intent/tweet?text=${quote} - ${author}`);
  };

  return (
    <div id="quote-box" className="text-center">
      <div id="text">{quote}</div>
      <div id="author">{author}</div>
      <button id="new-quote" onClick={handleNewQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleTweet}
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default App;
