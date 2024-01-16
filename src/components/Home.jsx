import React, { useState } from 'react';
import Navbar from './Navbar';
import './Home.css'; // Import your custom styles for the URL shortener

const ShortenerHome = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShortenUrl = () => {
    // Implement your URL shortening logic here
    // For example, you can use a service or generate a short URL locally
    // Update the 'shortenedUrl' state with the result
    const shortUrl = 'https://short.url/abcd123';
    setShortenedUrl(shortUrl);
  };

  return (
    <div className="glassmorphism-background">
      <Navbar />
      <div className="container text-center">
        <h1 className="display-4 text-primary"><strong>Welcome to the URL Shortener</strong></h1>
        <p className="lead">
          Shorten your long URLs quickly and easily.
          Enter the original URL to get a shortened version.
        </p>
        {shortenedUrl && (
          <div className="shortened-url mt-4">
            <h2 className="text-success"><strong>Shortened URL:</strong></h2>
            <p>
              <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                {shortenedUrl}
              </a>
            </p>
          </div>
        )}
        <div className="tips mt-4">
          <h2 className="text-light">Tips for Effective URL Shortening</h2>
          <ul className="list-unstyled">
            <li>Ensure the original URL is accurate and complete.</li>
            <li>Share the shortened URL to make links more manageable.</li>
            <li>Use a reputable URL shortening service for reliability.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShortenerHome;
