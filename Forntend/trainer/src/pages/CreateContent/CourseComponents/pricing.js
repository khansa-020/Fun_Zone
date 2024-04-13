import React, { useState } from 'react';
import Heading from '../../../Constants/Heading/heading';
import Button from '../../../Constants/button/button';
import "./pricing.css";

function Pricing() {

const [type, setType] = useState('');
const [currency, setCurrency] = useState('USD');
const [price, setPrice] = useState('');

  
  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div>
      <Heading text="Pricing" />

      <div className='text-head'>
        <h2>Set a price for your course</h2>
        <p>Please select the currency and the price tier for your course. If you’d like to offer your course for free, it must have a total video length of less than 2 hours. Also, courses with practice tests cannot be free.</p>
      </div>

      
    
<div>
      <div className="input-group">
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="" disabled selected>
            Choose Type
          </option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>

      {type === 'paid' && (
        <>
        <div className='paid'>
        <label htmlFor='currency'>Select Currency:</label>
        <select id='currency' value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value='USD'>USD</option>
          <option value='PKR'>PKR</option>
          <option value='PKR'>INR</option>
        </select>

        <label htmlFor='price'>Enter Price:</label>
        <input
          type='number'
          id='price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='Enter price'
          required
        />
        </div>
    </>
      )}
      </div>
      </div>




<div className='price-btn'>
      <Button onClick={handleSubmit}>Save</Button>
      </div>
    </div> 
  );
}

export default Pricing;
