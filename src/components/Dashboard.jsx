import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getProfile from '../services/users';

const Dashboard = () => {
  const [goldData, setGoldData] = useState({
    weight: '',
    purity: '',
    currency: '',
  });

  const [userProfile, setuserProfile] = useState({});
  const [totalPrice, setTotalPrice] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculation = async (e) => {
    e.preventDefault();

    const { weight, purity, currency } = goldData;
    const marketPrice = 64450; // Replace with the actual market price

    const total = (weight * (purity / 100)) * marketPrice;

    // Format the total price as Indian Rupees
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    });

    setTotalPrice({ currency, value: formatter.format(total) });
  };

  useEffect(() => {
    getProfile(dispatch)
      .then((data) => {
        setuserProfile(data);
      })
      .catch((err) => {
        console.log(err);
        navigate('/signin');
      });
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('loggedInUser');
    setuserProfile({});
    dispatch({ type: 'USER_LOGOUT' });
    navigate('/signin');
  };

  return (
    <div className="container mt-5 ">
      <div className="card bg-warning">
        <div className="card-body">
          <h3 className="mb-4">Let's Calculate!!</h3>
          <p>{userProfile.name} has signed in!!</p>
          <form onSubmit={calculation}>
            <div className="mb-3">
              <label htmlFor="weight" className="form-label"><strong>Weight</strong></label>
              <input
                name="Weight"
                type="number"
                className="form-control"
                required
                placeholder="eg: 10 (in grams)"
                onChange={(e) => setGoldData({ ...goldData, weight: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="purity" className="form-label"><strong>Purity</strong></label>
              <input
                name="Purity"
                type="number"
                className="form-control"
                required
                placeholder="eg: 10 (in %)"
                onChange={(e) => setGoldData({ ...goldData, purity: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="currency" className="form-label"><strong>Currency</strong></label>
              <input
                name="Currency"
                type="number"
                className="form-control"
                required
                placeholder="eg: 10 (in ₹)"
                onChange={(e) => setGoldData({ ...goldData, currency: e.target.value })}
              />
            </div>
            <p>Status on Jan 2024: 10g of 24k gold (99.9%) in Chennai is 64,450.00 Indian Rupee</p>
            <button type="submit" className="btn btn-success">Calculate</button>
          </form>
          {totalPrice !== null && (
            <div className="mt-4">
              <p className="fw-bold">Total Price:</p>
              <h4>{totalPrice.value}</h4>
            </div>
          )}
          
        </div>
      </div>
      <div className='d-flex align-items-end'>
      <button onClick={handleLogout} className="btn btn-danger mt-3">Logout</button></div>
    </div>
  );
};

export default Dashboard;
