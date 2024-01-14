import React from 'react';
import Navbar from './Navbar';
import './Home.css'; // Import your custom styles

const Home = () => {
  const goldDetails = {
    weight: '10g',
    purity: '24k (99.9%)',
    location: 'Chennai',
    price: '64,450.00 Indian Rupee',
  };

  return (
    <div className="glassmorphism-background">
      <Navbar />
      <div className="container text-center">
        <h1 className="display-4 text-primary">Welcome to the Gold Calculator App</h1>
        <p className="lead">
          Calculate the value of your gold based on current market rates and purity.
          Simply input the weight and purity of your gold to get an accurate estimate.
        </p>
        <div className="gold-details mt-4">
          <h2 className="text-warning">Gold Price Details</h2>
          <p>
            {goldDetails.weight} of {goldDetails.purity} gold in {goldDetails.location} is{' '}
            <strong>{goldDetails.price}</strong>.
          </p>
        </div>
        <div className="calculation-method mt-4">
          <h2 className="text-success">Calculation Method</h2>
          <p>
            Our app uses the following formula to calculate the value of your gold:
            <br />
            Value = (Weight in grams) x (Purity in karats) x (Gold Rate per gram)
          </p>
        </div>
        <div className="tips mt-4">
          <h2 className="text-info">Tips for Accurate Calculation</h2>
          <ul className="list-unstyled">
            <li>Ensure the weight is in grams.</li>
            <li>Provide the correct karat value for accurate purity.</li>
            <li>Check the latest gold rates for precise results.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
